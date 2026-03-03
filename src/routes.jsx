import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
              path: "shop",
              element: <Shop />,
          },
          {
              path: "cart",
              element: <Cart />,
          }
        ]
    },
]);

export default router;