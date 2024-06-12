import React, { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { Button, TextField } from "@mui/material";

import "./search.css";

const Search = () => {
  const [search, setSearch] = useState<string>("harrypotter");
  const apiResponse = () => {
    const books = api(search);
  };

  useEffect(() => {
    apiResponse();
  }, [search]);
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
          />
        </div>
        <div className="button-container">
          <Button variant="contained">My BookShelf</Button>
        </div>
      </div>
      <div className="bottom-section"></div>
    </div>
  );
};

export default Search;
