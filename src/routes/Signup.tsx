import React, { useEffect, useState } from "react";
import { Card, Input, Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

const formDetails = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  branch: "",
};

interface SignUpForm {
  firstName: String;
  lastName: String;
  email: string;
  password: String;
  branch: String;
}

const countryOptions = [
  { key: "af", value: "MPC", text: "MPC" },
  { key: "ax", value: "BPC", text: "BPC" },
];

function Signup() {
  const [signupForm, setSignupForm] = useState<SignUpForm>(formDetails);
  // const [branch, setBranch] = useState<any>("");
  const navigator = useNavigate();

  const handleClick = () => {
    console.log(signupForm);
    // navigator("/books");
  };

  // const handleSelect = (e: any, data: any) => {
  //   setBranch(data.value);
  // };

  // useEffect(() => {
  //   console.log(branch);
  // }, [branch]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios
      .post("http://localhost:4000/auth/signup", signupForm)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        localStorage.setItem("email", signupForm.email);
        navigator("/books");
      })
      .catch((err) => {
        alert("This book is already added");
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
            <Form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Input
                name="firstName"
                placeholder="firstname"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
              <Input
                name="lastName"
                placeholder="lastname"
                style={{ margin: "10px", width: "280px" }}
                type="text"
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
              <Input
                name="email"
                placeholder="email"
                style={{ margin: "10px", width: "280px" }}
                type="email"
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
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
                  setSignupForm({
                    ...signupForm,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
              {/* <Dropdown
                placeholder="Branch"
                search
                selection
                options={countryOptions}
                value={branch}
                onChange={
                  // setBranch();
                  handleSelect
                }
                style={{ margin: "10px", width: "280px" }}
              /> */}
              <Button
                primary
                style={{ margin: "10px", width: "280px" }}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
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
                navigator("/");
              }}
            >
              Signin
            </span>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Signup;
