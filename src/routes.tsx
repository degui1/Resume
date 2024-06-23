import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultTemplate } from "./templates/DefaultTemplate";
import { Resume } from "./pages/Resume/Resume";
import { About } from "./pages/About/About";

export const Router = createBrowserRouter([
  {
    element: <DefaultTemplate />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  }
])