import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

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
        errorMessage = "Unknown error";
    }
    return (
        <div className="error-page">
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

export default ErrorPage;
