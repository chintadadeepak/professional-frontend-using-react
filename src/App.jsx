import React from "react";
import PasswordGenerator from "./projects/password-generator";

function App() {
  return (
    <div>
      <PasswordGenerator />
    </div>
  );
}

export default App;

// // import { useState } from "react";
// // import Card from "./components/Card";
// // concepts understood through this project
// // 1. at the time of rendering the buttons, duplicating is the only way available.
// // 2. changing the entire div background-color to solve the problem.
// // 3. learned little tailwind css
// // 4. also understood why parameters can be passed directly through an onClick function.

// import { useState } from "react";
// // const colors = [
// //   "red",
// //   "green",
// //   "blue",
// //   "olive",
// //   "grey",
// //   "yellow",
// //   "pink",
// //   "purple",
// //   "lavendar",
// //   "white",
// //   "black",
// // ];
// // import ReturnButtons from "./components/ReturnButtons";
// function App() {
//   // const [color, setColor] = useState("green");

//   return (
//     // <div
//     //   className="w-full h-screen duration-200"
//     //   style={{ backgroundColor: color }}
//     // >
//     //   <div className="flex flex-row px-5 mx-2 bg-amber-200 rounded-xl">
//     //     <button
//     //       onClick={() => setColor("red")}
//     //       className="h-10 w-20 bg-red-400 rounded-2xl my-2 mx-2 text-white"
//     //     >
//     //       red
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("green")}
//     //       className="h-10 w-20 bg-green-400 rounded-2xl my-2 mx-2 text-white"
//     //     >
//     //       green
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("blue")}
//     //       className="h-10 w-20 bg-blue-400 rounded-2xl my-2 mx-2 text-white"
//     //     >
//     //       blue
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("orange")}
//     //       className="h-10 w-20 bg-amber-900 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       olive
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("gray")}
//     //       className="h-10 w-20 bg-gray-500 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       grey
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("yellow")}
//     //       className="h-10 w-20 bg-yellow-400 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       yellow
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("pink")}
//     //       className="h-10 w-20 bg-pink-400 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       pink
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("purple")}
//     //       className="h-10 w-20 bg-purple-400 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       purple
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("cyan")}
//     //       className="h-10 w-20 bg-cyan-500 rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       lavendar
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("black")}
//     //       className="h-10 w-20 bg-black rounded-2xl my-2 mx-3 text-white"
//     //     >
//     //       black
//     //     </button>
//     //     <button
//     //       onClick={() => setColor("white")}
//     //       className="h-10 w-20 bg-white rounded-2xl my-2 mx-3 text-black"
//     //     >
//     //       white
//     //     </button>
//     //   </div>
//     // </div>
//   );
// }

// export default App;

// // const [count, setCount] = useState(15);

// // // Interview Question
// // const incValue = () => {
// //   for (let i = 0; i < 4; i++) setCount((prevCount) => prevCount + 1);
// //   // setCount((prevCount) => prevCount + 1);
// //   // setCount((prevCount) => prevCount + 1);
// //   // setCount((prevCount) => prevCount + 1);
// //   // setCount(count + 2);
// //   // setCount(count + 2);
// //   // setCount(count + 4);
// // };

// // const decValue = () => {
// //   setCount(count - 1);
// // };
// // const username = "deepak chintada";
