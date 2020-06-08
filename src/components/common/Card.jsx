import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, img, cardName, cardDescription } = props;

  return (
    <Link to={`/playlists/${id}`}>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img loading="lazy" src={img}></img>
          </div>
          <div className="card-title">
            <h4>{cardName}</h4>
            <span>{cardDescription}</span>
          </div>
          <div className="card-play-button">
            <button>
              <svg height="16" role="img" width="16" viewBox="0 0 24 24">
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
