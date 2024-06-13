import React, { useCallback, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Button, TextField } from "@mui/material";

import "./search.css";
import { BookCards } from "../../shared";
import { Book } from "../../../@types/Books.types";

const Search = () => {
  const [searchData, setSearchData] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  const apiResponse = async () => {
    if (searchData.trim() !== "") {
      const result = await api(searchData);
      console.log("first", result);
      if (result) {
        setBooks(result.docs);
      }
    }
  };

  useEffect(() => {
    apiResponse();
  }, [searchData]);
  return (
    <div className="search-page">
      <div className="top-section">
        <div className="search-box-container">
          {/* <h2 className="search-text">Search by Book Name:</h2> */}
          <TextField
            id="outlined-basic"
            label="Search by Book Name"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
          />
        </div>
        <div className="button-container">
          <Button variant="contained">My BookShelf</Button>
        </div>
      </div>
      <div className="bottom-section">
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCards
              key={index}
              title={book.title}
              edition={book.edition_count}
            />
          ))
        ) : (
          <p>No books found.</p>
        )}
        {/* <BookCards title={"jod"} edition={100} /> */}
      </div>
    </div>
  );
};

export default Search;
