import { useEffect } from "react";

import { getData } from "./request/api";
import { useDataStore } from "./hooks";
import { DataTable } from "./components";

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
    <div className="flex flex-1 min-h-screen justify-center items-center">
      <DataTable />
    </div>
  );
}

export default App;
