import React from "react";
import { Book } from "../../../@types/Books.types";

import "./bookShelfCards.css";

const BookShelfCards: React.FC<Book> = ({ title, edition_count }) => {
  return (
    <div className="book-shelf-cards">
      <div className="name">
        <h4 className="label">Book Title:</h4>
        <p className="value">{title}</p>
      </div>
      <div className="edition">
        <h4 className="label">Edition Count:</h4>
        <p className="value">{edition_count}</p>
      </div>
    </div>
  );
};

export default BookShelfCards;
