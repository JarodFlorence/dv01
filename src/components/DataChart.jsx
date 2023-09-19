import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import { useDataStore } from "../hooks";
import { numberWithCommas } from "../utils";

const DataChart = () => {
  const grades = useDataStore((state) => state.grades());

  return (
    <BarChart
      width={700}
      height={300}
      data={grades.map((item) => ({
        name: `Grade ${item.grade}`,
        total: Number(item.total).toFixed(2),
      }))}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 15, fill: "#000" }} />
      <YAxis
        tick={{ fontSize: 13, fill: "#000" }}
        width={80}
        tickFormatter={(val) => `$${numberWithCommas(val)}`}
      />
      <Tooltip
        itemStyle={{ fontSize: 13, textTransform: "capitalize" }}
        formatter={(val) => `$${numberWithCommas(val)}`}
      />
      <Bar dataKey="total" fill="#3e63dd" />
    </BarChart>
  );
};

export { DataChart };
