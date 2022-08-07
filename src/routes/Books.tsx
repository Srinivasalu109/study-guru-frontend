import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Image, Loader } from "semantic-ui-react";
import background from "../images/background.jpg";
import Header from "../components/Header";
import BookOptions from "../components/BookOptions";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";

import "../styles/Items.css";

function Books() {
  interface BookType {
    bookId: String;
    author: String;
    bookImgURL: String;
    bookName: String;
    branch: String;
    chapters: String[];
    description: String;
    preparedFor: String[];
    subject: String;
    volume: String;
  }
  interface BookNames {
    key: number;
    value: any;
    text: any;
  }
  let { branch } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState<BookType[]>([]);
  const [subject, setSubject] = useState<String>("Mathematics");
  const [booksNames, setBookNames] = useState<BookNames[]>([]);

  const handleSubject = (sub: String) => {
    console.log(sub);
    setSubject(sub);
  };
  const Book = ({ data }: any) => (
    <Card>
      <Image src={data.bookImgURL} wrapped ui={false} />
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Header
          style={{
            textAlign: "center",
            color: "#042745",
            zIndex: "1.3",
            marginTop: "10px",
          }}
        >
          {data.bookName}
        </Card.Header>
        <Card.Header
          style={{
            textAlign: "center",
            color: "#042745",
            zIndex: "1",
            fontSize: "1rem",
          }}
        >
          <p>{data.author}</p>
        </Card.Header>
        <Card.Description>{data.description}</Card.Description>
      </Card.Content>
    </Card>
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`http://localhost:4000/request/getBooks/${subject}`)
      .then((res) => {
        const filterBookNames = [];
        for (let i = 0; i < res.data.length; i++) {
          filterBookNames.push({
            key: res.data[i].bookId,
            value: res.data[i].bookId,
            text: res.data[i].bookName,
          });
        }
        setBooks(res.data);
        setBookNames(filterBookNames);
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [subject]);

  return (
    <div>
      {books.length ? (
        <div style={{ background: "#edeceb" }}>
          <Header ser={"book"} data={booksNames} />
          <BookOptions handleSubject={handleSubject} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="Items">
              {books?.map((data) => (
                <div
                  className="Item"
                  onClick={() => {
                    navigate(`/bookDetails/${data.bookId}`);
                  }}
                >
                  <Book data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Books;
