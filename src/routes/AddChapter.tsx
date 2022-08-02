import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { chapterDetails } from "../utils/formDetails";
import axios from "axios";

interface Chapter {
  bookId: String;
  chapterId: String;
  chapterName: String;
}

function AddChapter() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newChapter, setNewChapter] = useState<Chapter>(chapterDetails);
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setNewChapter({ ...newChapter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    console.log("hello");
    console.log(newChapter);
    e.preventDefault();
    await axios
      .post("http://localhost:4000/add/addChapter", newChapter)
      .then((res) => {
        alert("sucessfully inserted");
      })
      .catch((err) => {
        alert("please check bookid and chapterid");
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
          <h1 style={{ fontSize: "1.8rem" }}>Add Chapter</h1>
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
                  required={true}
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
                  name="subject"
                  placeholder="subject"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="chapterName"
                  placeholder="chapter name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
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

export default AddChapter;
