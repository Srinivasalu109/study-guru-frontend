import React from "react";
import "../styles/Practice.css";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdIncompleteCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";

function Practice() {
  const navigate = useNavigate();
  return (
    <div className="practice">
      <div className="header">
        <ul
          style={{
            fontSize: "1.2rem",
          }}
        >
          <li style={{ display: "flex", alignItems: "center" }}>
            <MdIncompleteCircle size={24} />
            <span>Unsolved</span>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <TiTick size={30} />
            <span>Solved</span>
          </li>

          <li style={{ display: "flex", alignItems: "center" }}>
            <BsFillBookmarkFill size={24} />
            <span>Marked</span>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="question-container">
          <div className="chapter">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>Chapter name</h1>
              <h2>Topic name</h2>
            </div>
            <div className="navigate">
              <Button
                basic
                color="orange"
                content="Previous"
                style={{ marginRight: "20px" }}
              />
              <Button basic color="orange" content="Next" />
            </div>
          </div>
          <div className="question">
            <div
              style={{
                backgroundColor: "rgb(255, 166, 1)",
                padding: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Question 10</h3>
              <TiTick size={30} />
            </div>
            <h3 style={{ padding: "10px 20px " }}>Single Choice question</h3>
            <h3 style={{ padding: "10px 20px" }}>what is the question ?</h3>
            <ul style={{ padding: "0px 20px" }}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="options">
            <Button basic color="orange" content="View Anwser" />
            <Button
              basic
              color="orange"
              content="Solution"
              onClick={() => {
                navigate("/solution");
              }}
            />
            <Button basic color="orange" content="Mark as important" />
          </div>
        </div>
        <div className="sidebar">
          <div className="chapters">
            <h1>Chapters</h1>
            <ul>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
            </ul>
          </div>
          <div className="topics">
            <h1>Topics</h1>
            <ul>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
              <li>hello man</li>
            </ul>
          </div>
          <div className="questions">
            <h1>Questions</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>1</li>
              <li>1</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>1</li>  
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
