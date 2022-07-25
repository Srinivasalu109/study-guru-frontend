import React, { useState } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import background from "../images/background.jpg";
import Header from "../components/Header";
import BookOptions from "../components/BookOptions";
import { useNavigate } from "react-router-dom";
import "../styles/Items.css";

function Books() {
  const navigate = useNavigate();
  const Book = () => (
    <Card>
      <Image src={background} wrapped ui={false} />
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Header
          style={{ textAlign: "center", color: "#042745", zIndex: "1" }}
        >
          Delhi University
        </Card.Header>
        <Card.Description>
          Delhi University is located in delhi
        </Card.Description>
        <p>nrfa rank is 21</p>
      </Card.Content>
    </Card>
  );

  return (
    <div style={{ background: "#edeceb" }}>
      <Header />
      <BookOptions />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="Items">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_) => (
            <div
              className="Item"
              onClick={() => {
                navigate("/bookDetails");
              }}
            >
              <Book />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
