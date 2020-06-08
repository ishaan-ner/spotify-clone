import React from "react";
import { useParams } from "react-router-dom";
import Category from "../common/Category";
import categories from "../../services/fakeCategories";
import allPlaylists from "../../services/fakePlaylists";

const GenreView = () => {
  const { id } = useParams();
  const category = categories.find((category) => category.id === id);
  return (
    <div className="genre-view main-window">
      <Category
        id={category.id}
        name={category.name}
        subHeading={category.subHeading}
        playlists={allPlaylists}
      />
    </div>
  );
};

export default GenreView;
