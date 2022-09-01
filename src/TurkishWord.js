
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import data from "./tempdata.json";
import { useState } from "react";


export default function TurkishWord() {
    const[words,SetWord]=useState(data)
  return (
    <div>
    <Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Word: {words[0].kelime}</Card.Title>
      <Card.Text>
      {words[0].sentences}
      </Card.Text>
      <Button variant="primary">BILIYORUM.</Button>
      <Button variant="primary">BILMIYORUM.</Button>
    </Card.Body>
  </Card>
  </div>
  )
}
