import { useEffect } from "react";

import { getData } from "./request/api";
import { useDataStore } from "./hooks";
import { DataChart, DataTable } from "./components";

function App() {
  const setData = useDataStore((state) => state.setData);

  useEffect(() => {
    fetchData();
  }, []);

  // fetch and set data to the store
  const fetchData = async () => {
    const data = await getData();
    setData(data || []);
  };

  return (
    <div className="flex flex-1 flex-col min-h-screen justify-center items-center gap-10">
      <DataTable />
      <DataChart />
    </div>
  );
}

export default App;
