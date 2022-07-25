import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { universityToBookDetails } from "../utils/formDetails";

const topicDetails = {
  bookId: "",
  chapterId: "",
  topicId: "",
  topicName: "",
};

function AddUniversityToBook() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newUniversityToBook, setNewUniversityToBook] = useState<object>(
    universityToBookDetails
  );
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setNewUniversityToBook({
      ...newUniversityToBook,
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
          <h1 style={{ fontSize: "1.8rem" }}>Add University To Book</h1>
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
                  name="universityName"
                  placeholder="university name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Input
                  name="nirf"
                  placeholder="nirf"
                  style={{ margin: "10px", width: "450px" }}
                  type="number"
                />
                <Input
                  name="location"
                  placeholder="location"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
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

export default AddUniversityToBook;
