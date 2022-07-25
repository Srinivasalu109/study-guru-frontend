import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import background from "../images/background.jpg";
import Header from "../components/Header";
import EventOptions from "../components/EventOptions";
import "../styles/Items.css";

function Events() {
  const Event = () => (
    <Card>
      <Image src={background} wrapped ui={false} />
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Header
          style={{ textAlign: "center", color: "#042745", zIndex: "1" }}
        >
          Matthew
        </Card.Header>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
        <p>A nice and tasty recepy for you</p>
      </Card.Content>
    </Card>
  );

  return (
    <div style={{ background: "#edeceb" }}>
      <EventOptions />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="Items">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_) => (
            <div className="Item">
              <Event />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
