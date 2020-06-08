import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { id, name, subHeading, playlists } = props;
  const matchedPlaylists = playlists.filter(
    (playlist) => playlist.category === name
  );
  return (
    <section>
      <div className="section-grid">
        <div className="section-heading">
          <Link to={`/category/${id}`}>
            <h2>{name}</h2>
          </Link>
          {name !== "Uniquely Yours" ? <a href="#">SEE ALL</a> : null}
          <span>{subHeading}</span>
        </div>
        {matchedPlaylists.map((playlist) => (
          <Card
            key={playlist.id}
            id={playlist.id}
            cardName={playlist.playlist}
            cardDescription={playlist.description}
            img={playlist.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
