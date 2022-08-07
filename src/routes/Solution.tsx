import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Solution.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import axios from "axios";

function Solution() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [solution, setSolution] = useState<String[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/request/getSolution/${questionId}`)
      .then((res) => {
        const array = res.data.solution.split("\n");
        console.log(array);
        setSolution(array);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="solution">
          <div className="solution-header">
            <IoArrowBackCircleOutline
              size={35}
              style={{ cursor: "pointer", marginLeft: "7px" }}
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
          <div className="solution-body">
            {solution.map((line) => (
              <h3 style={{marginTop:"10px"}}>{line}</h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Solution;
