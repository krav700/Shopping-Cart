import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";

export const routerConfig = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
        errorElement: <ErrorPage />,
    },
];

export default createBrowserRouter(routerConfig);
