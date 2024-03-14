export const ResultField = ({ resultValue, resultText }) => {
  return (
    <div className='rounded-lg border border-gray-300 bg-white'>
      <div className='px-4 py-2 border-b border-gray-300'>
        <h1 className='text-xl font-bold text-black font-fira-code-regular'>{resultText}:</h1>
      </div>
      <div className='flex justify-between items-center px-4 py-4'>
        <input
          type='number'
          readOnly
          value={resultValue}
          className='px-2 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50'
        />
      </div>
    </div>
  );
};
