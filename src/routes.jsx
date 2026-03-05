import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { createBrowserRouter, isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage = "";
    if (isRouteErrorResponse(error)) {
      errorMessage = error.error?.message || error.statusText;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else {
      console.log(error);
      errorMessage = "Unknown error";
    }
    return (
        <div>
            <h1>Oh no, an error occured!</h1>
            <p>
                <i>{errorMessage}</i>
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
