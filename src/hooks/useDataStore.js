import { create } from "zustand";

const useDataStore = create((set, get) => ({
  data: [],
  grades: () => {
    // create an object based on the grade number with a total aggregation of the current balance for each grade
    const gradesObj = get().data.reduce((grades, item) => {
      if (!item.grade) return grades;
      return {
        ...grades,
        [item.grade]: (grades[item.grade] || 0) + Number(item.currentBalance),
      };
    }, {});
    // convert the grade object to an array
    return Object.keys(gradesObj).map((grade) => ({
      grade,
      total: gradesObj[grade],
    }));
  },
  setData: (data) => set({ data }),
}));

export { useDataStore };
