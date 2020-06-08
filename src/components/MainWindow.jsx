import React from "react";
import Category from "./common/Category";
import categories from "../services/fakeCategories";
import allPlaylists from "../services/fakePlaylists";

const MainWindow = () => {
  return (
    <div className="main-window">
      <div className="main-grid">
        {categories.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            name={category.name}
            subHeading={category.subHeading}
            playlists={allPlaylists}
          />
        ))}
      </div>
    </div>
  );
};

export default MainWindow;
