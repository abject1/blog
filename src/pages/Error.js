import React from "react";
import Navigation from "../components/Navigation";

const Error = () => {
  return (
    <div className="container">
      <Navigation />
      <secion className="container-error">
        <span className="underline-error"></span>
        <h2>Error 404</h2>
        <h5>Contact the administrator of the web site</h5>
        <span className="underline-error"></span>
      </secion>
    </div>
  );
};

export default Error;
