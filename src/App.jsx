import { useEffect } from "react";

import { getData } from "./request/api";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getData();
    console.log(res);
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
