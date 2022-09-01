import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TurkishQuiz from "./TurkishQuiz";
import EnglishQuiz from "./EnglishQuiz";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function QuizStarted() {
  const [ShowEnglish, SetShowEnglish] = useState(true);
  const [index, SetIndex] = useState(0);
  const [words, SetWord] = useState([
    {
      english: "",
      turkish: "",
      sentences: "",
      know: "",
      token: "",
    },
  ]);

  const indexenglish = words
    .filter((word) => word.know === "Level4" || "Level3" || "Level2")
    .map((word) => word.english);

  const indexsentences = words
    .filter((word) => word.know === "Level4" || "Level3" || "Level2")
    .map((word) => word.sentences);

  const indexturkish = words
    .filter((word) => word.know === "Level4" || "Level3" || "Level2")
    .map((word) => word.turkish);

  const indexid = words
    .filter((word) => word.know === "Level4" || "Level3" || "Level2")
    .map((word) => word._id);
  const indexknow = words
    .filter((word) => word.know === "Level4" || "Level3" || "Level2")
    .map((word) => word.know);

  useEffect(() => {
    axios.get("https://wordwordenglish.herokuapp.com/posts").then((response) => {
      SetWord(response.data);
    }, []);
  });

  const showTurkish = () => {
    SetShowEnglish(false);
  };
  const showEnglish = () => {
    SetShowEnglish(true);
  };

  const nextCardKnow = (event, id) => {
    event.preventDefault();
    SetIndex(index + 1);
    SetShowEnglish(true);

    const test = words
      .filter((word) => word._id === id)
      .map((wordknow) => wordknow.know);

    const url = `https://wordwordenglish.herokuapp.com/posts/${id} `;
    if (String(test) === "Level4") {
      axios
        .patch(
          url,
          {
            know: "Level3",
          },
          {
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        .then((data) => console.log(data));
    }
    if (String(test) === "Level3") {
        axios
          .patch(
            url,
            {
              know: "Level2",
            },
            {
              headers: { "Content-type": "application/json; charset=UTF-8" },
            }
          )
          .then((data) => console.log(data));
      }
      if (String(test) === "Level2") {
        axios
          .patch(
            url,
            {
              know: "Level1",
            },
            {
              headers: { "Content-type": "application/json; charset=UTF-8" },
            }
          )
          .then((data) => console.log(data));
      }
  };
  const nextCardNotKnow = (event, id) => {
    SetIndex(index + 1);
    SetShowEnglish(true);
    event.preventDefault();
  };

  if (ShowEnglish === true) {
    if (indexenglish.length === index) {
      if (indexenglish.length === 0) {
        return (
          <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
            <Card>
              <Card.Body>
                <Card.Title>There are no words to quiz.</Card.Title>

                <Card.Text>You can add using New Word Page.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      }

      return (
        <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
          <Card>
            <Card.Body>
              <Card.Title>It is finished.</Card.Title>

              <Card.Text>You can start new Quiz.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }

    return (
      <EnglishQuiz
        index={index}
        indexenglish={indexenglish}
        showTurkish={showTurkish}
        indexsentences={indexsentences}
        indexknow={indexknow}
      ></EnglishQuiz>
    );
  } else {
    if (indexenglish.length === 0) {
      return <div>yok</div>;
    }
    return (
      <TurkishQuiz
        index={index}
        indexid={indexid}
        indexturkish={indexturkish}
        nextCardKnow={nextCardKnow}
        nextCardNotKnow={nextCardNotKnow}
        showEnglish={showEnglish}
        indexsentences={indexsentences}
        indexknow={indexknow}
      ></TurkishQuiz>
    );
  }
}
