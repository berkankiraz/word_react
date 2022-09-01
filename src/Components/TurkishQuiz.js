import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function TurkishQuiz(props) {
  return (
    <div style={{ paddingTop: "2rem", paddingInline: "5rem" }}>
      <Card>
        <Card.Header>{props.indexknow[props.index]}</Card.Header>
        <Card.Body>
          <Card.Title>Turkish: {props.indexturkish[props.index]}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.indexsentences[props.index]}
          </Card.Subtitle>
          <div>
            <Button
              variant="primary"
              onClick={(event) =>
                props.nextCardKnow(event, props.indexid[props.index])
              }
              style={{marginRight:"1rem"}}
            >
              I know it
            </Button>
            <Button
              variant="primary"
              onClick={(event) =>
                props.nextCardNotKnow(event, props.indexid[props.index])
              }
              style={{marginRight:"1rem"}}
            >
              I did not know it
            </Button>

            <Button variant="primary" onClick={props.showEnglish}>
              Show English
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
