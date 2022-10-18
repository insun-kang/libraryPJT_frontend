import React, { useEffect, useState } from "react";
import axios from "axios";

import BookCard from "../../components/Card/BookCard";

const Book = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/books')
            .then(res => {
                setBooks(res.data);
            });
    }, []);


   return(
    <div 
    style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
      }}>
        {books.map(book => {
            return(
                <div key = {book.id}>
                    <BookCard book={book}/>
                </div>
            )
        })}
    </div>

   )
}

export default Book;
