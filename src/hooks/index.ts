import { useEffect } from 'react';

export const useWebSocketConnection = (symbol, onData) => {
  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      onData(data);
    };

    return () => {
      ws.close();
    };
  }, [symbol, onData]);
};
