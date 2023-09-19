import Select from "react-select";

import { useDataStore } from "../hooks";

const FILTERS = [
  {
    key: "homeOwnership",
    placeholder: "Home Ownership",
  },
  {
    key: "quarter",
    placeholder: "Quarter",
  },
  {
    key: "term",
    placeholder: "Term",
  },
  {
    key: "year",
    placeholder: "Year",
  },
];

const DataFilter = () => {
  const filterOptions = useDataStore((state) => state.filterOptions());
  const setFilter = useDataStore((state) => state.setFilter);
  const resetFilters = useDataStore((state) => state.resetFilters);
  const filters = useDataStore((state) => state.filters);

  const generateArrayOptions = (options) => {
    return Object.keys(options).map((option) => ({
      label: option,
      value: options[option],
    }));
  };

  return (
    <div className="flex gap-6 mt-6">
      {FILTERS.map((item) => (
        <Select
          key={item.key}
          placeholder={item.placeholder}
          value={filters[item.key] || null}
          options={generateArrayOptions(filterOptions[item.key])}
          className="w-44 text-sm"
          onChange={(value) => setFilter(item.key, value)}
        />
      ))}
      <button
        onClick={resetFilters}
        className="bg-gray-500 hover:bg-gray-700 duration-200 rounded-md px-7 py-2 text-white"
      >
        Reset
      </button>
    </div>
  );
};

export { DataFilter };
