import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/BookDetails.css";
import CustomCard from "../components/CustomCard";
import { Accordion, Form, Menu, Button, Loader } from "semantic-ui-react";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface PreferedType {
  branch: String;
  city: String;
  nirf: String;
  state: String;
  universityId: String;
  universityImgURL: String;
  universityName: String;
  universityType: String;
}

interface Chapter {
  chapterId: String;
  chapterName: String;
}
// MdLocationOn
export default function BookDetails() {
  let { bookId } = useParams();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [bookDetails, setBookDetails] = useState<any>([]);
  const [preferedFor, setPreferedFor] = useState<PreferedType[]>([]);
  const [chapter, setChapter] = useState<Chapter[]>([]);
  const [paths, setPaths] = useState<Chapter[]>([]);
  const [path, setPath] = useState<any>("");
  const [prev, setPrev] = useState<number>(-1);

  console.log(bookId);
  const navigate = useNavigate();

  const start = () => {
    console.log(paths[0]);
    console.log(`/practice/${paths[0]}/${0}`);
    if (paths.length) {
      navigate(`/practice/${paths[0].chapterId}/${0}`, {
        state: {
          name: paths,
        },
      });
    } else {
      alert("select chapter");
    }
  };

  const handleChapter = (i: number, chapterId: any, chapterName: any) => {
    localStorage.setItem(`${i}`, chapterId);
    if (paths.length === 0) {
      setPath(chapterId);
    }
    setPaths([...paths, { chapterId, chapterName }]);
  };

  const chapters = (
    <Form>
      <Form.Group grouped>
        {chapter.map((chap, i) => (
          <Form.Checkbox
            label={`${chap.chapterName}`}
            name="Chapter 1"
            value={`${chap.chapterName}`}
            style={{ margin: "5px" }}
            onClick={() => handleChapter(i, chap.chapterId, chap.chapterName)}
          />
        ))}
      </Form.Group>
    </Form>
  );
  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    console.log(titleProps);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
    axios
      .get(`http://localhost:4000/request/getBook/${bookId}`)
      .then((res) => {
        console.log(res.data);
        setBookDetails(res.data.book);
        setPreferedFor(res.data.book.preparedFor);
        setChapter(res.data.book.chapters);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      {preferedFor.length ? (
        <div className="bookDetails">
          {/* <Header /> */}
          <CustomCard bookDetails={bookDetails} />
          <div className="preparationFor">
            <h1>Preaparation for</h1>
            <div>
              <ul>
                {preferedFor.map((uni) => (
                  <li>
                    <div
                      onClick={() => {
                        navigate(`/booksByUniversity/${uni.universityId}`);
                      }}
                    >
                      <h3>{uni.universityName}</h3>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <span>
                          <MdLocationOn /> {uni.state} ({uni.city})
                        </span>
                        {/* <span style={{ marginLeft: "20px" }}>
                      .nirf rank {uni.nirf}
                    </span> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="BookContent">
            <h1>Book content</h1>
            <Accordion as={Menu} vertical>
              <Menu.Item>
                <Accordion.Title
                  active={activeIndex === 1}
                  content="Chapter"
                  index={1}
                  onClick={handleClick}
                />
                <Accordion.Content
                  active={activeIndex === 1}
                  content={chapters}
                />
              </Menu.Item>
            </Accordion>
            <Button
              primary
              style={{ marginTop: "20px", paddingTop: "10px 70px 70px 20px" }}
              onClick={start}
            >
              Start
            </Button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
