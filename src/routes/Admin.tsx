import React from "react";
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <div className="adminHeader">
        <IoArrowBackCircleOutline
          size={35}
          style={{ cursor: "pointer", marginLeft: "7px" }}
        />
      </div>
      <div className="adminBody">
        <ul>
          <li
            onClick={() => {
              navigate("/addBook");
            }}
          >
            Add book
          </li>
          <li
            onClick={() => {
              navigate("/addTopic");
            }}
          >
            Add topic
          </li>
          <li
            onClick={() => {
              navigate("/addChapter");
            }}
          >
            Add chapter
          </li>
          <li
            onClick={() => {
              navigate("/addQuestion");
            }}
          >
            Add question
          </li>
          <li
            onClick={() => {
              navigate("/addUniversity");
            }}
          >
            Add university
          </li>
          <li
            onClick={() => {
              navigate("/addBookToUniversity");
            }}
          >
            Add book to university
          </li>
          <li
            onClick={() => {
              navigate("/addUniversityToBook");
            }}
          >
            Add university to book
          </li>
          <li
            onClick={() => {
              navigate("/addTopicToChapter");
            }}
          >
            Add topic to chapter
          </li>
          <li
            onClick={() => {
              navigate("/AddQuestionToTopic");
            }}
          >
            Add question to topic
          </li>
          <li
            onClick={() => {
              navigate("/addEvent");
            }}
          >
            Add Event
          </li>
a        </ul>
      </div>
    </div>
  );
}
