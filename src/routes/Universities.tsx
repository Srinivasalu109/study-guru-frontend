import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Image, Loader, Rating } from "semantic-ui-react";
import Header from "../components/Header";
import UniversityOptions from "../components/UniversityOptions";
import background from "../images/background.jpg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import "../styles/Items.css";

interface UniversityType {
  bookPreferred: String[];
  branch: String;
  city: String;
  nirf: String;
  state: String;
  universityId: String;
  universityImgURL: String;
  universityName: String;
  universityType: String;
}
interface UniversityNames {
  key: number;
  value: any;
  text: any;
}

function Univerisities() {
  const [universities, setUniversities] = useState<UniversityType[]>([]);
  const [category, setCategory] = useState<String>("Deemed");
  const [universityNames, setUniversityNames] = useState<UniversityNames[]>([]);

  const navigate = useNavigate();

  const Univerisity = ({ uni }: any) => (
    <Card>
      <Image
        src={uni.universityImgURL}
        wrapped
        ui={false}
        style={{
          // height: "200px",
          objectFit: "cover",
          height: "100%",
        }}
      />
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
          {uni.universityName}
        </Card.Header>
        <Card.Description>
          <p>
            <MdLocationOn />
            {uni.state} {uni.city}
          </p>
        </Card.Description>
        <p> NIRF rank {uni.nirf}</p>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Rating icon="star" defaultRating={3} maxRating={4} />
        </div> */}
      </Card.Content>
    </Card>
  );

  const handleUnivesityType = (cat: String) => {
    setCategory(cat);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`http://localhost:4000/request/getUniversities/${category}`)
      .then((res) => {
        const filterUniversityNames = [];
        for (let i = 0; i < res.data.length; i++) {
          filterUniversityNames.push({
            key: res.data[i].universityId,
            value: res.data[i].universityId,
            text: res.data[i].universityName,
          });
        }
        setUniversityNames(filterUniversityNames);
        setUniversities(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [category]);

  return (
    <div>
      {universities.length ? (
        <div style={{ background: "#edeceb", minHeight: "100vh" }}>
          <Header ser={"university"} data={universityNames} />
          <UniversityOptions handleUnivesityType={handleUnivesityType} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="Items">
              {universities.map((uni, i) => (
                <div
                  className="Item"
                  onClick={() => {
                    navigate(`/booksByUniversity/${uni.universityId}`);
                  }}
                >
                  <Univerisity uni={uni} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // <Loader />
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Univerisities;
