import React from "react";
import { Button, Card, Icon, Image, Rating } from "semantic-ui-react";
import Header from "../components/Header";
import UniversityOptions from "../components/UniversityOptions";
import background from "../images/background.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Items.css";

function Univerisities() {
  const navigate = useNavigate();

  const Univerisity = () => (
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
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Rating icon="star" defaultRating={3} maxRating={4} />
        </div> */}
      </Card.Content>
    </Card>
  );

  return (
    <div style={{ background: "#edeceb" }}>
      {}
      <UniversityOptions />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="Items">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
            <div className="Item">
              <Univerisity />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Univerisities;
