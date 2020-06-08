import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="buttons">
        <Link to="/signup">
          <button href="#">SIGN UP</button>
        </Link>
        <button className="selected" href="#">
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default TopBar;
