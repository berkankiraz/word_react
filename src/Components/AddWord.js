import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function AddWord() {
  const [Show, SetShow] = useState(false);
  const [SubmitedWord, SetSubmitedWord] = useState([
    {
      english: "",
      turkish: "",
      sentences: "",
      know: "",
      token: "",
    },
  ]);

  const [NewWords, SetNewWords] = useState([
    {
      english: "",
      turkish: "",
      sentences: "",
      know: "",
      token: "",
    },
  ]);


  const NewWordChange = (event) => {
    event.preventDefault();
    const FieldName = event.target.getAttribute("name");
    const FieldValue = event.target.value;
    const NewWordArray = { ...NewWords };
    NewWordArray[FieldName] = FieldValue;

    SetNewWords(NewWordArray);
    console.log(NewWordArray);
  };

  const SubmitNewWord = (event) => {
    event.preventDefault();
    const NewWord = {
      english: NewWords.english,
      turkish: NewWords.turkish,
      sentences: NewWords.sentences,
      know: NewWords.know,
      token: token,
    };

    axios.post("https://wordwordenglish.herokuapp.com/posts", NewWord).then((response) => {
      console.log(response);
    });

    SetNewWords({
      english: "",
      turkish: "",
      sentences: "",
      know: "",
      token: "",
    });
    SetShow(true);

    setTimeout(() => SetShow(false), 1000);
  };
  return (
    <div style={{ paddingTop: "2rem", paddingInline: "8rem" }}>
      <Form onSubmit={SubmitNewWord}>
        <Form.Group className="mb-3" controlId="disabled ">
          <Form.Label>English Word</Form.Label>
          <Form.Control
            placeholder="Enter word"
            required="required"
            type="text"
            name="english"
            value={NewWords.english}
            onChange={NewWordChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="disabled ">
          <Form.Label>Turkish Meaning</Form.Label>
          <Form.Control
            placeholder="Enter turkish word"
            type="text"
            name="turkish"
            value={NewWords.turkish}
            onChange={NewWordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="disabled ">
          <Form.Label>The Sentences</Form.Label>
          <Form.Control
            placeholder="Enter the sentences."
            type="text"
            name="sentences"
            value={NewWords.sentences}
            onChange={NewWordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="disabled ">
          <Form.Label>The Sentences</Form.Label>
          <Form.Select
            placeholder="Choose the level."
            type="text"
            name="know"
            value={NewWords.know}
            onChange={NewWordChange}
          >
            <option>Choose Level ... </option>
            <option>Level1</option>
            <option>Level2</option>
            <option>Level3</option>
            <option>Level4</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div style={{ paddingTop: "1rem" }}>
          <Alert show={Show} key="success" variant="success">
            Words is registered.
          </Alert>
        </div>
      </Form>
    </div>
  );
}
