import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
// import ReactDOM from "react";
// import { createRoot } from "react-dom/client";
// import { jsx as _jsx } from "react/jsx-dev-runtime.js";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);

// function MyApp() {
//   return (
//     <div>
//       <h3>Exploring React!!</h3>
//     </div>
//   );
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// const username = "deepak chintada";

// const domElementOneUsingCoreReactLibrary = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click me to visit GOOGLE",
//   `${username}`
//   // JS variables will be injected into the DOM after entire tree creation
// );

// // const domElementTwoUsingCoreReactLibrary = React.createElement(
// //   "h3",

// //   "Exploring React!!"
// // );

// createRoot(document.getElementById("root")).render(
//   // <App />
//   // [
//   // domElementOneUsingCoreReactLibrary
//   // domElementTwoUsingCoreReactLibrary,
//   // ]
//   domElementOneUsingCoreReactLibrary
// );
// <StrictMode>
// reactElement
// MyApp()
// </StrictMode>,
// anotherElement
