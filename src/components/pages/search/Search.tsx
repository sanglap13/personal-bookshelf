import React, { useCallback, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Button, TextField } from "@mui/material";

import "./search.css";
import { BookCards, Loader } from "../../shared";
import { Book } from "../../../@types/Books.types";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchData, setSearchData] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBookShelf = () => {
    navigate("/bookshelf");
  };

  const apiResponse = async () => {
    if (searchData.trim() !== "") {
      setLoading(true);
      const result = await api(searchData);
      console.log("first", result);
      if (result) {
        setBooks(result.docs);
      }
      setLoading(false);
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
          <Button variant="contained" onClick={handleBookShelf}>
            My BookShelf
          </Button>
        </div>
      </div>
      <div className={loading ? "loader" : "bottom-section"}>
        {loading ? (
          <Loader />
        ) : books.length > 0 ? (
          books.map((book, index) => {
            const { title, edition_count } = book;
            return (
              <BookCards
                key={index}
                title={title}
                edition_count={edition_count}
              />
            );
          })
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
