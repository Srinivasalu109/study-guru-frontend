import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { questionDetails } from "../utils/formDetails";


function AddQuestion() {
  const [newQuestion, setNewQuestion] = useState<object>(questionDetails);

  const handleChange = (e: any) => {
    console.log(newQuestion);
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    console.log(newQuestion);
    e.preventDefault();
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
                  name="topicId"
                  placeholder="topic id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="question"
                  placeholder="question"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="optionId1"
                  placeholder="option id 1"
                  style={{ margin: "10px", width: "450px" }}
                  onchange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="optionId2"
                  placeholder="option id 2"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="optionId3"
                  placeholder="option id 3"
                  style={{ margin: "10px", width: "450px" }}
                  onchange={handleChange}
                  type="text"
                  required
                />
                <Input
                  name="optionId4"
                  placeholder="option id 4"
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
                <TextArea
                  name="solution"
                  placeholder="Solution"
                  style={{ margin: "10px", width: "450px", minHeight: "100px" }}
                  onchange={handleChange}
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
