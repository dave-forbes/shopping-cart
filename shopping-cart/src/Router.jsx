import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import OurStory from "./components/OurStory/OurStory";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Bag from "./components/Bag/Bag";

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
        {
          path: "/products/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/bag",
          element: <Bag />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
