import React from "react";

import "./bookCards.css";
import { Button } from "@mui/material";

const BookCards = ({ title, edition }: any) => {
  return (
    <div className="book-cards">
      <div className="name">
        <h4 className="label">Book Title:</h4>
        <p className="value">{title}</p>
      </div>
      <div className="edition">
        <h4 className="label">Edition Count:</h4>
        <p className="value">{edition}</p>
      </div>

      <Button variant="contained">Add to BookShelf</Button>
    </div>
  );
};

export default BookCards;
