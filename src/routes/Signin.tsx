import React, { useState } from "react";
import { Card, Input, Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const formDetails = {
  email: "",
  password: "",
};

function Signin() {
  const [signinForm, setSigninForm] = useState<object>(formDetails);
  const navigator = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios
      .post("http://localhost:4000/auth/signin", signinForm)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigator("/books");
      })
      .catch((err) => {
        alert("Account not exist please signup");
        console.log(err);
      });
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
          <Form
            onSubmit={handleSubmit}
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
              type="email"
              onChange={(e) =>
                setSigninForm({
                  ...signinForm,
                  [e.target.name]: e.target.value,
                })
              }
              required
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
              required
            />
            <Button
              primary
              type="submit"
              style={{ margin: "10px", width: "280px" }}
            >
              Log In
            </Button>
          </Form>
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
