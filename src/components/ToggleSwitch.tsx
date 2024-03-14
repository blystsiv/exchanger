export const ToggleSwitch = ({ isSell, handleToggleChange, actionText }) => {
  return (
    <div className='rounded-lg mb-8 border border-gray-300 bg-white'>
      <div className='px-4 py-2 border-b border-gray-300'>
        <h1 className='text-xl font-bold text-black font-fira-code-regular'>Action:</h1>
      </div>
      <div className='flex justify-between items-center px-4 py-4'>
        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            checked={isSell}
            onChange={handleToggleChange}
            className='sr-only peer'
          />
          <div className="relative w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
          <span className='ms-3 text-sm font-medium text-black font-fira-code-regular'>
            {actionText}
          </span>
        </label>
      </div>
    </div>
  );
};
