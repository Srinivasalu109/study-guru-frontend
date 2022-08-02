import React, { useState, useEffect } from "react";
import "../styles/Add.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Card, Input, Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import { TextArea, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { eventDetails } from "../utils/formDetails";
import axios from "axios";

interface Event {
  eventId: String;
  eventName: String;
  time: String;
  universityName: String;
  location: String;
  branch: String;
}
const branches = [
  { key: "af", value: "MPC", text: "MPC" },
  { key: "ax", value: "BiPC", text: "BiPC" },
];

function AddEvent() {
  const [img, setImg] = useState<any>("");
  const [imgUrl, setImgUrl] = useState<String>("");
  const [newEvent, setNewEvent] = useState<Event>(eventDetails);
  const [branch, setBranch] = useState<any>("");

  const handleChange = (e: any) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleBranch = (e: any, data: any) => {
    setBranch(data.value);
  };

  const handleSubmit = async (e: any) => {
    console.log("sdc,msdc")
    e.preventDefault();
    if (!branch) {
      alert("please select branch");
      return;
    }
    if (!imgUrl) {
      alert("please upload image");
    }

    const event = {
      eventId: newEvent.eventId,
      eventName: newEvent.eventName,
      universityName: newEvent.universityName,
      location: newEvent.location,
      time: newEvent.time,
      eventImgUrl: imgUrl,
      branch: branch,
    };

    console.log(event);

    await axios
      .post("http://localhost:4000/add/addEvent", event)
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
        <div className="addHeader">
          <IoArrowBackCircleOutline
            size={35}
            style={{ cursor: "pointer", marginLeft: "7px" }}
          />
        </div>
        <div className="addBody">
          <h1 style={{ fontSize: "1.8rem" }}>Add Event</h1>
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
                  name="eventId"
                  placeholder="event id"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="eventName"
                  placeholder="event name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="time"
                  placeholder="time"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
                <Input
                  name="universityName"
                  placeholder="university name"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
                />
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
                  name="location"
                  placeholder="location"
                  style={{ margin: "10px", width: "450px" }}
                  type="text"
                  onChange={handleChange}
                  required
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

export default AddEvent;
