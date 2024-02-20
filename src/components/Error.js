import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  return (
    <div>
      <h1>We are having some issues</h1>
      <h2>Oops something went wrong!</h2>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
