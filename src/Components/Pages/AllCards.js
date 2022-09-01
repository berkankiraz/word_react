import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function AllCards() {
  const [Show, SetShow] = useState(false);
  const [words, SetWord] = useState([
    {
      english: "",
      turkish: "",
      sentences: "",
      know: "",
      token: "",
    },
  ]);

  useEffect(() => {
    axios.get("https://wordwordenglish.herokuapp.com/posts").then((response) => {
      SetWord(response.data);
    }, []);
  });

  const DeleteWord = (event, id) => {
    const url = `https://wordwordenglish.herokuapp.com/posts/${id} `;
    console.log(url);
    event.preventDefault();
    axios.delete(url).then((response) => {
      console.log("silindi.");
    });
    SetShow(true);
    setTimeout(() => SetShow(false), 1000);
  };

  const cardswithuserid = words.filter((word) => word.token === token);

  if (cardswithuserid.length === 0) {
    return (
      <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
        <Card>
          <Card.Body>
            <Card.Title>There are no words.</Card.Title>

            <Card.Text>You can add using New Word Page.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Alert show={Show} key="success" variant="success">
            It is deleted!
          </Alert>
        </div>
        {cardswithuserid.map((word,index) => (
          <div style={{ paddingTop: "2rem", paddingInline: "5rem" }} key={index}>
            <Card>
              <Card.Header> {word.know}</Card.Header>
              <Card.Body>
                <Card.Title>
                  English: {word.english} Turkish : {word.turkish}
                </Card.Title>
                <Card.Text>{word.sentences}</Card.Text>
                <Button
                  onClick={(event) => DeleteWord(event, word._id)}
                  variant="primary"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
