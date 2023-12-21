import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
