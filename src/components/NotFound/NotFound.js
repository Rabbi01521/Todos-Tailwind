import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/home");
  };
  return (
    <div>
      <h3>404</h3>
      <h1>THis page is not Available</h1>
      <button onClick={handleHome} className="btn">
        Home
      </button>
    </div>
  );
};

export default NotFound;
