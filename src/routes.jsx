import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { createBrowserRouter, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
                You can go back to the home page by clicking here!
            </Link>
        </div>
    );
};

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
