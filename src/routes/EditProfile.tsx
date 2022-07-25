import React, { useState } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/EditProfile.css";

const formDetails = {
  email: "",
  password: "",
};

function EditProfile() {
  const [signinForm, setSigninForm] = useState<object>(formDetails);
  const navigator = useNavigate();

  const ChangeProfile = () => {
    return (
      <div className="changeProfile">
        <ul>
          <li>Edit profile</li>
          <li>Switch account</li>
          <li>Logout</li>
          <li>Cancle</li>
        </ul>
      </div>
    );
  };

  const handleClick = () => {
    console.log(signinForm);
    navigator("/books");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#edeceb",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Card style={{ width: "400px" }}>
          <Card.Content style={{ margin: "auto" }}>
            {/* <img
            alt="instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          /> */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={{}}>
                <h1 style={{ fontSize: "1.5rem", margin: "10px" }}>
                  allasrinivasulu
                </h1>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    color: "blue",
                    margin: "10px",
                    cursor: "pointer",
                  }}
                >
                  Change profile
                </h2>
              </div>
              <Input
                name="firstName"
                placeholder="firstname"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSigninForm({
                    ...signinForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Input
                name="lastName"
                placeholder="lastname"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSigninForm({
                    ...signinForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Input
                name="email"
                placeholder="email"
                style={{ margin: "10px", width: "280px" }}
                type="email"
                onChange={(e) =>
                  setSigninForm({
                    ...signinForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Input
                name="phoneNumber"
                placeholder="mobile number"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSigninForm({
                    ...signinForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Input
                name="gender"
                placeholder="gender"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSigninForm({
                    ...signinForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Button
                primary
                style={{ margin: "10px", width: "280px" }}
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default EditProfile;
