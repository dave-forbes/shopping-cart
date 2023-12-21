import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/ourstory",
          element: <OurStory />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
