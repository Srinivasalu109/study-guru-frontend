import React, { useState } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { questionToTopicDetails } from "../utils/formDetails";

function AddQuestionToTopic() {
  const [newQuestionToTopic, setNewQuestionToTopic] = useState<object>(
    questionToTopicDetails
  );
  const handleChange = (e: any) => {
    setNewQuestionToTopic({
      ...newQuestionToTopic,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
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
          <h1 style={{ fontSize: "1.8rem" }}>Add Question To Topic</h1>
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
                  onchange={handleChange}
                  required
                />
                <Input
                  name="chapterId"
                  placeholder="chapter id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Input
                  name="topicId"
                  placeholder="topic id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Input
                  name="question"
                  placeholder="question"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="optionId1"
                  placeholder="option id 1"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="optionId2"
                  placeholder="option id 2"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="optionId3"
                  placeholder="option id 3"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="optionId3"
                  placeholder="option id 4"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="option1"
                  placeholder=" option 1"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="option2"
                  placeholder="option 2"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="option3"
                  placeholder="option 3"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="option4"
                  placeholder="option 4"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="anwser"
                  placeholder="anwser"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <TextArea
                  name="solution"
                  placeholder="solution"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Button
                  primary
                  style={{ margin: "10px", width: "450px" }}
                  type="submit"
                >
                  Add Topic
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionToTopic;
