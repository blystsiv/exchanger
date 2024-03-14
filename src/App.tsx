import { useEffect, useState } from 'react';
import { InputField, ResultField, ToggleSwitch } from './components';
import { useWebSocketConnection } from './hooks';

interface ExchangeData {
  bit: number;
  ask: number;
}

export const App = () => {
  const [exchangeData, setExchangeData] = useState<ExchangeData>({ bit: 0, ask: 0 });
  const [input, setInput] = useState<number>(1);
  const [resultValue, setResultValue] = useState<number>(0);
  const [isSell, setIsSell] = useState<boolean>(true);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Math.max(0, parseFloat(event.target.value) || 0);
    setInput(inputValue);
  };

  const handleToggleChange = () => {
    setIsSell((prevIsSell) => !prevIsSell);
  };

  useWebSocketConnection('ethusdt@bookTicker', (data) =>
    setExchangeData((prevData) => ({ ...prevData, bit: data.b, ask: data.a })),
  );

  useWebSocketConnection('ethusdt@trade', (data) =>
    setExchangeData((prevData) => ({ ...prevData, bit: data.p })),
  );

  useEffect(() => {
    const countedValue = input * (isSell ? exchangeData.bit : exchangeData.ask);
    setResultValue(Number(countedValue.toFixed(2)));
  }, [exchangeData, input, isSell]);

  const actionText = isSell ? 'Sell' : 'Buy';
  const resultText = isSell ? 'USDT Receive' : 'USDT Spend';

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='custom-width px-4 py-8 max-w-md bg-white rounded-lg shadow-md'>
        <InputField input={input} handleChangeInput={handleChangeInput} />
        <ToggleSwitch
          isSell={isSell}
          handleToggleChange={handleToggleChange}
          actionText={actionText}
        />
        <ResultField resultValue={resultValue} resultText={resultText} />
      </div>
    </div>
  );
};
