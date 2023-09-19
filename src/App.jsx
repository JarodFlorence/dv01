import { useEffect } from "react";

import { getData } from "./request/api";
import { useDataStore } from "./hooks";

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
    <div className="flex flex-1 justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
