import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function EnglishQuiz(props) {
  return (
    <div style={{ paddingTop: '2rem'  , paddingInline:'5rem'}}>
    <Card>
      <Card.Header>{props.indexknow[props.index]}</Card.Header>
      <Card.Body>
        <Card.Title>English: {props.indexenglish[props.index]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.indexsentences[props.index]}
        </Card.Subtitle>
        
        <Button variant="primary" onClick={props.showTurkish}>
          Show Turkish
        </Button>
      </Card.Body>
    </Card>
  </div>
  )
}
