import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(15);

  // Interview Question
  const incValue = () => {
    for (let i = 0; i < 4; i++) setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    // setCount(count + 4);
  };

  const decValue = () => {
    setCount(count - 1);
  };
  // const username = "deepak chintada";
  return (
    <>
      <h3>count value : {count}</h3>
      <button
        onClick={incValue}
        className="bg-black text-white p-4 rounded-xl mr-2"
      >
        Inc
      </button>
      <button className="bg-black text-white p-4 rounded-xl" onClick={decValue}>
        Dec
      </button>
    </>
  );
}

export default App;
