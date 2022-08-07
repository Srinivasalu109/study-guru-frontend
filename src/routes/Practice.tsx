import React, { useState, useEffect } from "react";
import "../styles/Practice.css";
import { Button, TextArea } from "semantic-ui-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdIncompleteCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import axios from "axios";

interface Options {
  option: String;
}
interface Chapter {
  anwser: String;
  bookId: String;
  chapterId: String;
  markedBy: [];
  options: Options[];
  question: String;
  questionId: String;
  solution: String;
  solvedBy: [];
}

interface Question {
  anwser: String;
  bookId: String;
  chapterId: String;
  markedBy: [];
  options: Options[];
  question: String;
  questionId: String;
  solution: String;
  solvedBy: [];
}

interface Chapters {
  chapterId: String;
  chapterName: String;
}

const options = [false, false, false, false];
const solved = [true, false];

function Practice() {
  const navigate = useNavigate();
  const { chapId, num } = useParams();
  console.log(chapId);
  const { state } = useLocation();
  const s: any = state;
  const [chapterId, setChapterId] = useState<any>(chapId);
  const [curChapter, setCurChapter] = useState<String>(s.name[0].chapterName);
  const [chapters, setChapters] = useState<Chapter[]>(s.name);
  const [qnum, setQnum] = useState<number>(0);
  const [question, setQuestion] = useState<Question>();
  const [noOfQue, setNoOfQue] = useState<number>(0);
  const [chapNames, setChapNames] = useState<Chapters[]>(s.name);
  const [loading, setLoading] = useState<boolean>(true);
  const [viewAnwser, setViewAnwser] = useState<boolean>(false);
  const [selOption, setSelOption] = useState<boolean[]>(options);
  const [trigger, setTrigger] = useState<number>(0);
  const [probleType, setProbelmType] = useState<String>("Unsolved");
  const [solve, setSolve] = useState<boolean[]>(solved);
  console.log(s.name);
  const selected = (index: number, questionId: any) => {
    const newOptions = [false, false, false, false];
    for (let i = 0; i < selOption.length; i++) {
      if (i === index) {
        newOptions[i] = true;
      } else {
        newOptions[i] = false;
      }
    }
    const email = localStorage.getItem("email");
    console.log(email);
    if (probleType === "Unsolved") {
      axios
        .get(`http://localhost:4000/request/solved/${questionId}/${email}`)
        .then((res) => {
          console.log(res.data);
          console.log("res.data.que");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    console.log(newOptions);
    setSelOption(newOptions);
    setTrigger(trigger + 1);
  };
  const mark = async () => {
    const email = localStorage.getItem("email");
    console.log(question?.questionId, "qqqqqqqqqqqqqqqqqqqqqq");
    await axios
      .get(
        `http://localhost:4000/request/markQuestion/${question?.questionId}/${email}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(
      `http://localhost:4000/request/getQuestions/${chapterId}/${qnum}/${probleType}/${email}`
    );
    axios
      .get(
        `http://localhost:4000/request/getQuestions/${chapterId}/${qnum}/${probleType}/${email}`
      )
      .then((res) => {
        console.log(res.data);
        console.log("res.data.que");
        setQuestion(res.data.que);
        setNoOfQue(res.data.numofque);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [qnum, chapterId, probleType]);
  return (
    <div>
      {noOfQue === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="practice">
          <div className="header">
            <ul
              style={{
                fontSize: "1.2rem",
              }}
            >
              <li
                // style={{ display: "flex", alignItems: "center" }}
                className={`${solved[0] ? "solve" : "solved"}`}
                onClick={() => {
                  setProbelmType("Unsolved");
                  solved[0] = true;
                  solved[1] = false;
                  setSolve(solved);
                }}
              >
                <MdIncompleteCircle size={24} />
                <span>Unsolved</span>
              </li>
              <li
                // style={{ display: "flex", alignItems: "center" }}
                className={`${solved[1] ? "solve" : "solved"}`}
                onClick={() => {
                  setProbelmType("Solved");
                  solved[0] = false;
                  solved[1] = true;
                  setSolve(solved);
                  setTrigger(trigger + 1);
                }}
              >
                <TiTick size={30} />
                <span>Solved</span>
              </li>

              {/* <li
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  setProbelmType("Marked");
                }}
              >
                <BsFillBookmarkFill size={24} />
                <span>Marked</span>
              </li> */}
            </ul>
          </div>
          <div className="content">
            {/* {chapters.map(chap=>) */}
            <div className="question-container">
              <div className="chapter">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1>{curChapter}</h1>
                </div>
                <div className="navigate">
                  {/* <Button
                    basic
                    color="orange"
                    content="Previous"
                    style={{ marginRight: "20px" }}
                  />
                  <Button basic color="orange" content="Next" /> */}
                </div>
              </div>
              <div className="question">
                <div
                  style={{
                    backgroundColor: "rgb(255, 166, 1)",
                    padding: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    borderRadius: "3px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3>Question {qnum + 1}</h3>
                  {probleType === "Unsolved" ? (
                    <MdIncompleteCircle size={24} />
                  ) : (
                    <TiTick size={30} />
                  )}
                </div>
                <h3 style={{ padding: "10px 20px " }}>
                  Single Choice question
                </h3>
                <h3 style={{ padding: "10px 20px" }}>{question?.question}</h3>
                <ul style={{ padding: "0px 20px" }}>
                  {question?.options.map((q, i) => (
                    <li
                      className={`${selOption[i] && "selected"}`}
                      onClick={() => {
                        selected(i, question.questionId);
                      }}
                    >
                      {String.fromCharCode(65 + i)}.{q.option}
                    </li>
                  ))}
                </ul>
                {viewAnwser && <p className="anwser">{question?.anwser}</p>}
              </div>
              <div className="options">
                <Button
                  basic
                  color="orange"
                  content={`${!viewAnwser ? "View Anwser" : "Hide Anwser"}`}
                  onClick={() => {
                    setViewAnwser(!viewAnwser);
                  }}
                />
                <Button
                  basic
                  color="orange"
                  content="Solution"
                  onClick={() => {
                    navigate(`/solution/${question?.questionId}`);
                  }}
                />
                {/* <Button
                  basic
                  color="orange"
                  content="Mark as important"
                  onClick={mark}
                /> */}
              </div>
            </div>
            <div className="sidebar">
              <div className="chapters">
                <h1>Chapters</h1>
                <ul>
                  {chapNames?.map((c, i) => (
                    <li
                      onClick={() => {
                        setChapterId(c.chapterId);
                        setCurChapter(c.chapterName);
                      }}
                    >
                      {" "}
                      {i + 1}.{c.chapterName}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="questions">
                <h1>Questions</h1>
                {console.log("no", noOfQue)}
                <ul>
                  {Array(noOfQue)
                    .fill(0)
                    ?.map((_, i) => (
                      <li
                        onClick={() => {
                          setQnum(i);
                        }}
                      >
                        {i + 1}
                      </li>
                    ))}
                </ul>
              </div>
              {/* <TextArea
            style={{  width: "90%", minHeight: "100px" }}
            placeholder="Ask Query"
          /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Practice;
