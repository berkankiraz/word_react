import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Testfor from "./Testfor";
import QuizStarted from "../QuizStarted";

export default function QuizSelect() {

  const[QuizStarted,SetQuizStarted]= useState(false)
  const [switch1, setswitch1] = useState(false);
  const [switch2, setswitch2] = useState(false);
  const [switch3, setswitch3] = useState(false);
  const [switch4, setswitch4] = useState(false);

  const switchHandle1 = () => {
    switch1 ? setswitch1(false) : setswitch1(true);
  };

  const switchHandle2 = () => {
    switch2 ? setswitch2(false) : setswitch2(true);
  };

  const switchHandle3 = () => {
    switch3 ? setswitch3(false) : setswitch3(true);
  };

  const switchHandle4 = () => {
    switch4 ? setswitch4(false) : setswitch4(true);
  };

  console.log(switch3)

  const StartQuiz = (event) =>{
    event.preventDefault()
    SetQuizStarted(true)

  }
  if(QuizStarted === true){
    return(
      window.location.href = "/quizstarted"
    )



  }

  else{
    return (
      <div style={{ paddingTop: "2rem", paddingInline: "8rem" }}>
        <Card style={{ width: "400px" }}>
          <Form>
            <Form.Check
              onClick={switchHandle1}
              type="switch"
              id="custom-switch1"
              label="Level 1"
              style={{ paddingTop: "2rem", paddingInline: "8rem" }}
            />
            <Form.Check
              onClick={switchHandle2}
              type="switch"
              id="custom-switch2"
              label="Level 2"
              style={{ paddingTop: "2rem", paddingInline: "8rem" }}
            />
            <Form.Check
              onClick={switchHandle3}
              type="switch"
              id="custom-switch3"
              label="Level 3"
              style={{ paddingTop: "2rem", paddingInline: "8rem" }}
            />
            <Form.Check
              onClick={switchHandle4}
              type="switch"
              id="custom-switch4"
              label="Level 4"
              style={{ paddingTop: "2rem", paddingInline: "8rem" }}
            />
          </Form>
          <Button variant="primary" style={{ margin: "10px" }}  onClick={(event)=>StartQuiz(event)}>
            Start The Quiz
          </Button>
        </Card>{" "}
      </div>
    );

  }
  
}
