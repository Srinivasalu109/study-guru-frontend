import React from "react";
import "../styles/CustomCard.css";
import background from "../images/background.jpg";
import { createStore } from "redux";
export default function CustomCard() {
  return (
    <div className="CustomCard">
      <div className="cardSection">
        <img alt="image" src={background} />
        <div className="moreDetails">
          <h1>HC verma</h1>
          <h1 style={{ marginTop: "0px" }}>2nd edition</h1>
          <p>HC verma is one of the most prefered book for preparation for </p>
        </div>
      </div>
    </div>
  );
}
