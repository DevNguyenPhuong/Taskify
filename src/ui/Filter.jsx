import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 rounded-sm border border-solid border-gray-100 bg-gray-50 p-2 shadow-sm">
      {options.map((option) => (
        <button
          className={`rounded-lg border-none bg-gray-50 px-5 py-2 text-2xl font-medium transition-all duration-300 [&:hover:not(:disabled)]:bg-indigo-50 [&:hover:not(:disabled)]:text-indigo-500 ${
            option.value === currentFilter ? "bg-indigo-600 text-indigo-50" : ""
          }`}
          onClick={() => handleClick(option.value)}
          key={option.value}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
