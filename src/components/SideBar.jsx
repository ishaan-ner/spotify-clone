import React from "react";
import { Link } from "react-router-dom";
import { searchSVG, homeSVG, spotifySVG, librarySVG } from "../assets/svgs";

const SideBar = (props) => {
  const { toggleModal } = props;
  return (
    <div className="side-bar">
      <div className="logo">
        <Link to="/">
          <svg viewBox="0 0 1134 340">
            <title>Spotify</title>
            {spotifySVG}
          </svg>
        </Link>
      </div>

      <ul className="nav-list">
        <Link to="/">
          <li className="nav-item active">
            <div className="nav-item-wrapper">
              {homeSVG}
              <p>Home</p>
            </div>
          </li>
        </Link>
        <Link to="/genres">
          <li className="nav-item">
            <div className="nav-item-wrapper">
              {searchSVG}
              <p>Search</p>
            </div>
          </li>
        </Link>

        <li className="nav-item" onClick={toggleModal}>
          <div className="nav-item-wrapper">
            {librarySVG}
            <p>Your Library</p>
          </div>
        </li>
      </ul>
      <div className="cookies">
        <p>Cookies</p>
        <hr></hr>
        <p>Privacy</p>
      </div>
    </div>
  );
};

export default SideBar;
