import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import BookDetail from "../../pages/Book/BookDetail";


function BookCard(props) {
  return (
    <Card style={{ width: '13rem' }}>
      <Link to={`/books/detail/${props.book.id}`}><Card.Img variant="top" src={'http://localhost:8080' + props.book.image}/></Link>
      <Card.Body>
        <Link to={`/books/detail/${props.book.id}`}><Card.Title>{props.book.title}</Card.Title></Link>
        <Card.Text>
        {props.book.author}
        </Card.Text>
        <Card.Text>rating : {props.book.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default BookCard;