import React, { useState } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const formDetails = {
  email: "",
  password: "",
};

function Signin() {
  const [signinForm, setSigninForm] = useState<object>(formDetails);
  const navigator = useNavigate();

  const handleClick = () => {
    console.log(signinForm);
    navigator("/books");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
            <Input
              name="email"
              placeholder="email"
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
              name="password"
              placeholder="password"
              style={{ margin: "10px", width: "280px" }}
              type="password"
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
              Log In
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card style={{ width: "400px" }}>
        <Card.Content>
          <p>
            Don't have an account? then{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                navigator("/signup");
              }}
            >
              Signup
            </span>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Signin;
