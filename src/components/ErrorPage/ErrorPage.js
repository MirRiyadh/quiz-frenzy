import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-3/4 m-auto pt-52">
      <h1 className="text-9xl mb-4">404</h1>
      <p className="mb-4">
        Oops, page not found We are very sory for the inconvenience. It looks
        like you're trying to access a page that has been deleted or never even
        existed.
      </p>
      <button className=" bg-teal-200 py-2 px-5">
        <Link to="/">Back to Homepage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
<h1></h1>;
