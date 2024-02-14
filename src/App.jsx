import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import Cart from "./UI/Cart";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
