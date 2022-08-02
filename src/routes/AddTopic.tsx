import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { topicDetails } from "../utils/formDetails";
import axios from "axios";

interface Topic {
  bookId: String;
  chapterId: String;
  topicId: String;
  topicName: String;
}

function AddTopic() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newTopic, setTopic] = useState<Topic>(topicDetails);
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setTopic({ ...newTopic, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    console.log("hello");
    e.preventDefault();
    await axios
      .post("http://localhost:4000/add/addTopic", newTopic)
      .then((res) => {
        alert("sucessfully inserted");
      })
      .catch((err) => {
        alert("please check bookid , chapterid and topicid ");
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
          <h1 style={{ fontSize: "1.8rem" }}>Add Topic</h1>
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
                  name="topicName"
                  placeholder="topic name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
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

export default AddTopic;
