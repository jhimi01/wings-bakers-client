import React from "react";
import { Link, useLocation, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorAnimation from "../../../public/Error.json"

const ErrorPage = () => {
    const location = useLocation();
    const error = location.state?.error;
    console.log(error?.message);
    console.log(error?.status);
    console.log(error?.statusText);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
    <Lottie style={{height: 300}} animationData={ErrorAnimation} />;
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-300 mb-4">
        We're sorry, but the page you were looking for could not be found.
      </p>
      <Link
        to="/home"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;

