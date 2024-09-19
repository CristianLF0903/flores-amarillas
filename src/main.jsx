import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";
import { Flowers } from "./Flowers.jsx";

const router = createBrowserRouter([
  {
    path: "/flores-amarillas/",
    element: <App />,
  },
  {
    path: "/flores-amarillas/flowers",
    element: <Flowers />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
