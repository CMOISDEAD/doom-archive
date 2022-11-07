import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./views/Home";
import { Article1 } from "./views/Article_1";
import { Article2 } from "./views/Article_2";
import { Article3 } from "./views/Article_3";
import { Article4 } from "./views/Article_4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "katex/dist/katex.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/article/1",
        element: <Article1 />,
      },
      {
        path: "/article/2",
        element: <Article2 />,
      },
      {
        path: "/article/3",
        element: <Article3 />,
      },
      {
        path: "/article/4",
        element: <Article4 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
