import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/error404.png";

const Error404 = () => {
  return (
    <Link to="/">
      <img
        src={error404}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        alt="not-found"
      />
    </Link>
  );
};

export default Error404;
