import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultTemplate } from "./templates/DefaultTemplate";

export const Router = createBrowserRouter([
  {
    element: <DefaultTemplate />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  }
])