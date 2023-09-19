import { useDataStore } from "../hooks";
import { numberWithCommas } from "../utils";

const DataTable = () => {
  const grades = useDataStore((state) => state.grades());

  return (
    <div className="flex border border-gray-300">
      {grades.map(({ grade, total }) => (
        <div
          key={grade}
          className="flex flex-col flex-1 border-r border-gray-300 min-w-[10rem] last:border-r-0"
        >
          <span className="text-center text-primary py-4 border-b border-gray-300 bg-gray-100 font-bold text-sm">
            Grade {grade}
          </span>
          <span className="text-center py-5">
            ${numberWithCommas(Number(total).toFixed(2))}
          </span>
        </div>
      ))}
    </div>
  );
};

export { DataTable };
