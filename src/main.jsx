import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './countryStyle.css'

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Country from "./Components/Country.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/:country",
    element: <Country />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
