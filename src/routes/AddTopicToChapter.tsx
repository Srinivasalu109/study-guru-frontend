import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { topicToChapterDetails } from "../utils/formDetails";

function AddTopicToChapter() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newTopicTochapter, setNewTopicTochapter] = useState<object>(
    topicToChapterDetails
  );
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setNewTopicTochapter({ ...newTopicTochapter, [e.target.name]: e.target.value });
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
          <h1 style={{ fontSize: "1.8rem" }}>Add Topic To Chapter</h1>
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
                  onchange={handleChange}
                  required
                />
                <Input
                  name="topicId"
                  placeholder="topic id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Input
                  name="topicName"
                  placeholder="topic name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onchange={handleChange}
                  required
                />{" "}
                <Button
                  primary
                  style={{ margin: "10px", width: "450px" }}
                  type="submit"
                >
                  Add book
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AddTopicToChapter;
