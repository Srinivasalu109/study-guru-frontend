import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { bookDetails } from "../utils/formDetails";
import axios from "axios";

interface NewBook {
  bookId: String;
  bookName: String;
  author: String;
  volume: String;
  description: String;
}
interface Book {
  bookId: String;
  bookName: String;
  author: String;
  branch: String;
  subject: String;
  volume: String;
  bookImgURL: String;
  description: String;
}

function AddBook() {
  const branches = [
    { key: "af", value: "MPC", text: "MPC" },
    { key: "ax", value: "BiPC", text: "BiPC" },
  ];

  const MPCsubjects = [
    { key: "af", value: "Mathematics", text: "Mathematics" },
    { key: "ax", value: "Physics", text: "Physics" },
    { key: "ax", value: "Chemistry", text: "Chemistry" },
  ];

  const BiPCsubjects = [
    { key: "af", value: "Biology", text: "Biology" },
    { key: "ax", value: "Physics", text: "Physics" },
    { key: "ax", value: "Chemistry", text: "Chemistry" },
  ];

  const subjects = [
    { key: "af", value: "Mathematics", text: "Mathematics" },
    { key: "ax", value: "Physics", text: "Physics" },
    { key: "ax", value: "Chemistry", text: "Chemistry" },
    { key: "af", value: "Biology", text: "Biology" },
    { key: "ax", value: "Physics", text: "Physics" },
    { key: "ax", value: "Chemistry", text: "Chemistry" },
  ];

  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newBook, setNewBook] = useState<NewBook>(bookDetails);
  const [branch, setBranch] = useState<any>("");
  const [subject, setSubject] = useState<any>("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleBranch = (e: any, data: any) => {
    setBranch(data.value);
  };

  const handleSubject = (e: any, data: any) => {
    setSubject(data.value);
  };

  const handleSubmit = async (e: any) => {
    console.log(newBook.bookId);
    e.preventDefault();
    if (!branch) {
      alert("please select branch");
      return;
    }
    if (!imgUrl) {
      alert("please upload image");
    }
    const book: Book = {
      bookId: newBook.bookId,
      bookName: newBook.bookName,
      subject: subject,
      branch: branch,
      author: newBook.author,
      volume: newBook.volume,
      description: newBook.description,
      bookImgURL: imgUrl,
    };
    await axios
      .post("http://localhost:4000/add/addBook", book)
      .then((res) => {
        console.log(res);
        alert("sucessfully added");
      })
      .catch((err) => {
        alert("This book is already added");
        console.log(err);
      });
  };
  useEffect(() => {
    if (img !== "") {
      const image = img !== null ? img : "";
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "myhome");
      data.append("clone_name", "dbekpyk92");
      fetch("https://api.cloudinary.com/v1_1/dbekpyk92//image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setImgUrl(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [img]);
  return (
    <div>
      <div className="add">
        <div
          className="addHeader"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBackCircleOutline
            size={35}
            style={{ cursor: "pointer", marginLeft: "7px" }}
          />
        </div>
        <div className="addBody">
          <h1 style={{ fontSize: "1.8rem" }}>Add Book</h1>
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
                  name="bookName"
                  placeholder="book name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="author"
                  placeholder="author"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Dropdown
                  placeholder="Branch"
                  search
                  selection
                  options={branches}
                  value={branch}
                  onChange={handleBranch}
                  style={{ margin: "10px", width: "450px" }}
                  required
                />
                <Dropdown
                  placeholder="Subject"
                  search
                  selection
                  options={
                    branch === "MPC"
                      ? MPCsubjects
                      : branch === "BiPC"
                      ? BiPCsubjects
                      : subjects
                  }
                  value={subject}
                  onChange={handleSubject}
                  style={{ margin: "10px", width: "450px" }}
                  required
                />
                <Input
                  name="volume"
                  placeholder="volume (optional)"
                  style={{ margin: "10px", width: "450px" }}
                  type="number"
                  onChange={handleChange}
                />
                <TextArea
                  name="description"
                  placeholder="discription about the book (optional)"
                  style={{ margin: "10px", width: "450px" }}
                  onChange={handleChange}
                />
                <label className="custom-file-upload">
                  <input
                    type="file"
                    onChange={(e) => {
                      setImg(
                        e.target.files !== null ? e.target.files[0] : null
                      );
                    }}
                  />
                  Upload Image
                </label>
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

export default AddBook;
