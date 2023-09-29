import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Cart from "./components/Cart/Cart";
import CartProvider from "./CartProvider";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default Router;
