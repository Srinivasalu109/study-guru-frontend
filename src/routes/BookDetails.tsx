import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/BookDetails.css";
import CustomCard from "../components/CustomCard";
import { Accordion, Form, Menu, Button } from "semantic-ui-react";
import { MdLocationOn } from "react-icons/md";
// MdLocationOn
export default function BookDetails() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ColorForm = (
    <Form>
      <Form.Group grouped>
        <Form.Checkbox label="Red" name="color" value="red" />
        <Form.Checkbox label="Orange" name="color" value="orange" />
        <Form.Checkbox label="Green" name="color" value="green" />
        <Form.Checkbox label="Blue" name="color" value="blue" />
      </Form.Group>
    </Form>
  );
  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <div className="bookDetails">
      <Header />
      <CustomCard />
      <div className="preparationFor">
        <h1>Preaparation for</h1>
        <div>
          <ul>
            <li>
              <div>
                <h3>Delhi University</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                  }}
                >
                  <span>
                    <MdLocationOn /> Delhi
                  </span>
                  <span style={{ marginLeft: "20px" }}>.nirf rank 123</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Delhi University</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                  }}
                >
                  <span>
                    <MdLocationOn /> Delhi
                  </span>
                  <span style={{ marginLeft: "20px" }}>nirf rank 123</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Delhi University</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                    marginRight: "4px",
                  }}
                >
                  <span>
                    <MdLocationOn />
                    Delhi
                  </span>
                  <span style={{ marginLeft: "20px" }}>nirf rank 123</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Delhi University</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                  }}
                >
                  <span>
                    <MdLocationOn /> Delhi
                  </span>
                  <span style={{ marginLeft: "20px" }}>.nirf rank 123</span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Delhi University</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                  }}
                >
                  <span>
                    {" "}
                    <MdLocationOn /> Delhi
                  </span>
                  <span style={{ marginLeft: "20px" }}>.nirf rank 123</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="BookContent">
        <h1>Book content</h1>
        {[1, 2, 3].map((_, i) => {
          return (
            <Accordion as={Menu} vertical>
              <Menu.Item>
                <Accordion.Title
                  active={activeIndex === 1}
                  content="Colors"
                  index={1}
                  onClick={handleClick}
                />
                <Accordion.Content
                  active={activeIndex === 1}
                  content={ColorForm}
                />
              </Menu.Item>
            </Accordion>
          );
        })}
        <Button
          primary
          style={{ marginTop: "20px", paddingTop: "10px 70px 70px 20px" }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
