import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Alert from "react-bootstrap/Alert";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function Level3() {
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

 

  const level3array = words
    .filter((word) => word.know === "Level3")
    .filter((word) => word.token === token);

  if (level3array.length === 0) {
    return (
      <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
        <Card>
          <Card.Body>
            <Card.Title>There are no Level-3 words.</Card.Title>

            <Card.Text>You can add using New Word  Page.</Card.Text>
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
      <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
        {words
          .filter((word) => word.know === "Level3")
          .map((word) => (
            <div>
              <Card>
                <Card.Header> {word.know}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    English: {word.english} Turkish : {word.turkish}
                  </Card.Title>

                  <Card.Text>{word.sentences}</Card.Text>
                  <Button variant="primary" onClick={(event) => DeleteWord(event, word._id)}>Delete</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
      </div>
    );
  }
}
