// Toolbar Component
const Toolbar = ({ onSearch, onToggle, isOnlySelected }) => {
  return (
    <div className="flex justify-between items-center bg-white p-5 shadow">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="form-input mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
      />
      <div className="flex items-center">
        <label htmlFor="only-selected" className="inline-flex items-center cursor-pointer">
          <input
            id="only-selected"
            type="checkbox"
            checked={isOnlySelected}
            onChange={onToggle}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="ml-2">Only selected</span>
        </label>
      </div>
    </div>
  );
};

export default Toolbar;
