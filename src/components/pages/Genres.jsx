import React from "react";
import { Link } from "react-router-dom";
import categories from "../../services/fakeCategories";

const Genres = () => {
  return (
    <div className="main-window">
      <div className="search-categories-wrapper">
        <div className="search-categories">
          <h2>Browse all</h2>
          {categories.map((category) => (
            <Link to={`/genres/${category.id}`}>
              <div className="search-category">
                <div className="search-category-content">
                  <span>{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
