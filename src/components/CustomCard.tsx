import React from "react";
import "../styles/CustomCard.css";
import background from "../images/background.jpg";
export default function CustomCard({ bookDetails }: any) {
  return (
    <div className="CustomCard">
       <div className="cardSection">
        <img alt="image" src={bookDetails.bookImgURL} />
        <div className="moreDetails">
          <h1>{bookDetails.bookName}</h1> 
          {/* <h1 style={{ marginTop: "0px" }}>2nd edition</h1> */}
          <p>{bookDetails.description} </p> 
        </div>
      </div> 
    </div>
  );
}
