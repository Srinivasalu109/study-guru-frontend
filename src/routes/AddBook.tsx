import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { bookDetails } from "../utils/formDetails";

function AddBook() {
  const countryOptions = [
    { key: "af", value: "MPC", text: "MPC" },
    { key: "ax", value: "BPC", text: "BPC" },
  ];
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newBook, setNewBook] = useState<object>(bookDetails);
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSelect = (e: any, data: any) => {
    setBranch(data.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!branch) {
      alert("please select branch");
      return;
    }
    if (!imgUrl) {
      alert("please upload image");
    }
    console.log("submited");
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
        <div className="addHeader">
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
                  onchange={handleChange}
                  required
                />
                <Input
                  name="bookName"
                  placeholder="user name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Input
                  name="author"
                  placeholder="author"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  required
                />{" "}
                <Dropdown
                  placeholder="Branch"
                  search
                  selection
                  options={countryOptions}
                  value={branch}
                  onChange={handleSelect}
                  style={{ margin: "10px", width: "450px" }}
                  required
                />
                <Input
                  name="subject"
                  placeholder="subject"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                />
                <Input
                  name="volume"
                  placeholder="volume (optional)"
                  style={{ margin: "10px", width: "450px" }}
                  type="number"
                />
                <TextArea
                  name="discription"
                  placeholder="discription about the book (optional)"
                  style={{ margin: "10px", width: "450px" }}
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
