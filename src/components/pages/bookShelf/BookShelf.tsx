import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BookCards } from "../../shared";
import { Book } from "../../../@types/Books.types";
import BookShelfCards from "../../shared/bookShelfCards/BookShelfCards";

import "./bookShelf.css";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState<Book[]>([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    console.log("yo", storedBooks);
    setBookshelf(storedBooks);
  }, []);

  return (
    <div className="bookshelf-page">
      <div className="top-section">
        <Button variant="outlined" onClick={goBack}>
          Back to Search
        </Button>
        <h2>My Bookshelf</h2>
      </div>
      <div className="bottom-section">
        {bookshelf.length > 0 ? (
          bookshelf.map((book, index) => {
            const { title, edition_count } = book;
            console.log("book", book, title, edition_count);
            return (
              <BookShelfCards
                key={index}
                title={title}
                edition_count={edition_count as number}
              />
            );
          })
        ) : (
          <p>No books in bookshelf.</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
