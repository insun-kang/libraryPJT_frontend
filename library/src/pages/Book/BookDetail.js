import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRating from 'react-bootstrap-star-rating';


const BookDetail = () => {
    const{bookId} = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/books/detail/'+bookId)
            .then(res => {
                setBook(res.data);
            });
    }, []);

    return(
        <Container flex>
            <Row md = {12}>
                <Col sm={4}>
                    <img variant="top" src={'http://localhost:8080' + book.image} width = {300} height={400}/>

                </Col>
                <Col sm={8}>
                    <Row sm ={2}>
                        <Col>{book.title}</Col>
                        <Col>{book.rating}</Col>
                    </Row>
                    <Row sm ={2}>{book.author}</Row>
                    <Row sm ={8}>{book.content}</Row>
                </Col>
            </Row>
            <Row md = {12}>
                <StarRating
                    defaultValue={5}
                    min={0}
                    max={5}
                    step={0.5} />

                <Col sm>{book.ratingOne}</Col>
                <Col sm>{book.ratingTwo}</Col>
                <Col sm>{book.ratingThree}</Col>
                <Col sm>{book.ratingFour}</Col>
                <Col sm>{book.ratingFive}</Col>
            </Row>
            <Row md = {12}>
                <Col sm>===comment line =====</Col>
            </Row>


        </Container>
        
    )
}

export default BookDetail;