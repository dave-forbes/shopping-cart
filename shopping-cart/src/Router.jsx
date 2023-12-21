import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopAll from "./pages/ShopAll";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Hero from "./components/hero";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "/shopall",
          element: <ShopAll />,
        },
        {
          path: "/ourstory",
          element: <OurStory />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
