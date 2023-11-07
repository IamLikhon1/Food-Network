import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home";
import MainBody from "./pages/MainBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:':id',
          element:<MainBody/>,
          loader:()=>fetch('/fruites.json')
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
