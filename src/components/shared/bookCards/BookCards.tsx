import React, { useEffect, useState } from "react";

import "./bookCards.css";
import { Button } from "@mui/material";
import { Book } from "../../../@types/Books.types";

const BookCards: React.FC<Book> = ({ title, edition_count }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const addToBookshelf = () => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    const newBook = { title, edition_count };
    localStorage.setItem("bookshelf", JSON.stringify([...bookshelf, newBook]));
    setIsAdded(true);
  };

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    const bookExists = bookshelf.some((book: Book) => book.title === title);
    setIsAdded(bookExists);
  }, [title]);
  return (
    <div className="book-cards">
      <div className="name">
        <h4 className="label">Book Title:</h4>
        <p className="value">{title}</p>
      </div>
      <div className="edition">
        <h4 className="label">Edition Count:</h4>
        <p className="value">{edition_count}</p>
      </div>

      <Button variant="contained" onClick={addToBookshelf} disabled={isAdded}>
        {isAdded ? "Added" : "Add to Bookshelf"}
      </Button>
    </div>
  );
};

export default BookCards;
