import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Image, Loader } from "semantic-ui-react";
import background from "../images/background.jpg";
import Header from "../components/Header";
import BookOptions from "../components/BookOptions";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Items.css";
import BooksByUniversityOptions from "../components/BooksByUniversityOptions";

interface BooksPreffered {
  author: String;
  bookId: String;
  bookImgURL: String;
  bookName: String;
  branch: String;
  description: String;
  subject: String;
  volume: String;
}
interface BookNames {
  key: number;
  value: any;
  text: any;
}
function BooksByUniversity() {
  const [booksPreferred, setBooksPreferred] = useState<BooksPreffered[]>([]);
  const navigate = useNavigate();
  const { universityId } = useParams();
  const [subject, setSubject] = useState<String>("Mathematics");
  const [booksNames, setBookNames] = useState<BookNames[]>([]);

  const Book = ({ bookInfo }: any) => (
    <Card>
      <Image src={bookInfo.bookImgURL} wrapped ui={false} />
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
          {bookInfo.bookName}
        </Card.Header>
        <Card.Header
          style={{
            textAlign: "center",
            color: "#042745",
            zIndex: "1",
            fontSize: "1rem",
            marginTop: "10px",
          }}
        >
          {bookInfo.author}
        </Card.Header>
        <Card.Description>{bookInfo.description}</Card.Description>
        <p>nrfa rank is 21</p>
      </Card.Content>
    </Card>
  );
  const handleSubject = (sub: String) => {
    console.log(sub);
    setSubject(sub);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/request/getBooksByUniversity/${universityId}/${subject}`
      )
      .then((res) => {
        console.log(res.data.bookPreferred);
        const filterBookNames = [];
        for (let i = 0; i < res.data.bookPreferred.length; i++) {
          filterBookNames.push({
            key: res.data.bookPreferred[i].bookId,
            value: res.data.bookPreferred[i].bookId,
            text: res.data.bookPreferred[i].bookName,
          });
        }
        setBookNames(filterBookNames);
        setBooksPreferred(res.data.bookPreferred);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [subject]);

  return (
    <div>
      {booksPreferred.length ? (
        <div style={{ background: "#edeceb" }}>
          <Header ser={"book"} data={booksNames} />
          <BooksByUniversityOptions handleSubject={handleSubject} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="Items">
              {booksPreferred.map((bookInfo) => (
                <div
                  className="Item"
                  onClick={() => {
                    navigate(`/bookDetails/${bookInfo.bookId}`);
                  }}
                >
                  <Book bookInfo={bookInfo} />
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

export default BooksByUniversity;
