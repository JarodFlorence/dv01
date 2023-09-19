import { create } from "zustand";

// filter data based on the filters object
const filteredData = (data, filters) => {
  const filtersKey = Object.keys(filters);
  if (!filtersKey.length) return data;
  return data.filter((item) => {
    // Check the filters in an optimal way
    const checkFilter = (key) =>
      filters[key] ? item[key] === filters[key].value : true;
    if (
      checkFilter("homeOwnership") &&
      checkFilter("quarter") &&
      checkFilter("term") &&
      checkFilter("year")
    )
      return item;
  });
};

const useDataStore = create((set, get) => ({
  data: [],
  filters: {},
  grades: () => {
    // create an object based on the grade number with a total aggregation of the current balance for each grade
    const gradesObj = filteredData(get().data, get().filters).reduce(
      (grades, item) => {
        if (!item.grade) return grades;
        return {
          ...grades,
          [item.grade]: (grades[item.grade] || 0) + Number(item.currentBalance),
        };
      },
      {}
    );
    // convert the grade object to an array
    return Object.keys(gradesObj).map((grade) => ({
      grade,
      total: gradesObj[grade],
    }));
  },
  filterOptions: () => {
    // create a filter options object based on the data
    const optionsObj = get().data.reduce(
      (options, item) => {
        if (!item.currentBalance) return options;
        const _options = options;
        _options.homeOwnership[item.homeOwnership] = item.homeOwnership;
        _options.quarter[item.quarter] = item.quarter;
        _options.year[item.year] = item.year;
        _options.term[item.term.replace(/^\s+|\s+$/g, "")] = item.term;
        return _options;
      },
      {
        homeOwnership: {},
        quarter: {},
        term: {},
        year: {},
      }
    );
    return optionsObj;
  },
  setData: (data) => set({ data }),
  setFilter: (filter, value) =>
    set((state) => ({ filters: { ...state.filters, [filter]: value } })),
  resetFilters: () => set({ filters: {} }),
}));

export { useDataStore };
