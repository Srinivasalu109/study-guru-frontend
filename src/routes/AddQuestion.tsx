import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { questionDetails } from "../utils/formDetails";
import axios from "axios";
import { isConstructorDeclaration } from "typescript";

interface Question {
  bookId: String;
  chapterId: String;
  question: String;
  questionId: String;
  option1: String;
  option2: String;
  option3: String;
  option4: String;
  anwser: String;
  solution: String;
}

function AddQuestion() {
  const [newQuestion, setNewQuestion] = useState<Question>(questionDetails);

  const handleChange = (e: any) => {
    console.log(newQuestion);
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    console.log("hello");
    console.log(newQuestion);
    e.preventDefault();
    await axios
      .post("http://localhost:4000/add/addQuestion", newQuestion)
      .then((res) => {
        alert("sucessfully inserted");
      })
      .catch((err) => {
        alert("please check bookid , chapterid , topicid and questionid");
      });
  };
  return (
    <div>
      <div className="add">
        <div className="addHeader">
          <IoArrowBackCircleOutline
            size={35}
            style={{ cursor: "pointer", marginLeft: "7px" }}
          />
        </div>
        <div className="addBody">
          <h1 style={{ fontSize: "1.8rem" }}>Add Question</h1>
          <Card style={{ width: "600px" }}>
            <Card.Content style={{ margin: "auto" }}>
              <Form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                onSubmit={handleSubmit}
              >
                <Input
                  name="bookId"
                  placeholder="book id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="chapterId"
                  placeholder="chapter id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="questionId"
                  placeholder="question id"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <TextArea
                  name="question"
                  placeholder="question"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="option1"
                  placeholder="option 1"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="option2"
                  placeholder="option 2"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="option3"
                  placeholder="option 3"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="option4"
                  placeholder="option 4"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="anwser"
                  placeholder="anwser"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  required
                />
                <TextArea
                  name="solution"
                  placeholder="Solution"
                  style={{ margin: "10px", width: "450px", minHeight: "100px" }}
                  onChange={handleChange}
                  required
                />
                <Button
                  primary
                  style={{ margin: "10px", width: "450px" }}
                  type="submit"
                >
                  Add question
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
