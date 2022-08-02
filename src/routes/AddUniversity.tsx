import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { universityDetails } from "../utils/formDetails";
import axios from "axios";

interface University {
  universityId: String;
  universityName: String;
  state: String;
  city: String;
  nirf: String;
}
const branches = [
  { key: "af", value: "MPC", text: "MPC" },
  { key: "ax", value: "BiPC", text: "BiPC" },
];

const universityTypes = [
  { key: "af", value: "Deemed", text: "Deemed" },
  { key: "ax", value: "State Board", text: "State Board" },
  { key: "ay", value: "Central Board", text: "Central Board" },
];

function AddUniversity() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newUniversity, setNewUniversity] =
    useState<University>(universityDetails);
  const [branch, setBranch] = useState<any>("");
  const [universityType, setNewUniversityType] = useState<any>("");

  const handleChange = (e: any) => {
    setNewUniversity({ ...newUniversity, [e.target.name]: e.target.value });
  };

  const handleBranch = (e: any, data: any) => {
    setBranch(data.value);
  };

  const handleUniversityType = (e: any, data: any) => {
    setNewUniversityType(data.value);
  };

  const handleSubmit = async (e: any) => {
    console.log("hello");
    if (!branch) {
      alert("please select branch");
      return;
    }
    if (!imgUrl) {
      alert("please upload image");
    }
    e.preventDefault();
    const university = {
      universityId: newUniversity.universityId,
      universityName: newUniversity.universityName,
      universityType:universityType,
      universityImgURL: imgUrl,
      state: newUniversity.state,
      city: newUniversity.city,
      branch: branch,
      nirf: newUniversity.nirf,
    };
    console.log(university);
    await axios
      .post("http://localhost:4000/add/addUniversity", university)
      .then((res) => {
        alert("sucessfully inserted");
      })
      .catch((err) => {
        alert("University already inserted");
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
        <div className="addHeader">
          <IoArrowBackCircleOutline
            size={35}
            style={{ cursor: "pointer", marginLeft: "7px" }}
          />
        </div>
        <div className="addBody">
          <h1 style={{ fontSize: "1.8rem" }}>Add University</h1>
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
                  name="universityId"
                  placeholder="university id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="universityName"
                  placeholder="university name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Dropdown
                  placeholder="University type"
                  search
                  selection
                  options={universityTypes}
                  value={universityType}
                  onChange={handleUniversityType}
                  style={{ margin: "10px", width: "450px" }}
                  required
                />
                <Input
                  name="state"
                  placeholder="state"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="city"
                  placeholder="city"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
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
                <Input
                  name="nirf"
                  placeholder="nirf"
                  style={{ margin: "10px", width: "450px" }}
                  type="number"
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

export default AddUniversity;
