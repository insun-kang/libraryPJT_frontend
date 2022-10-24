import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book/Book";
import Giveback from "./pages/Book/Giveback";
import BookDetail from "./pages/Book/BookDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/give-back" element={<Giveback />} />
          <Route path="/books/detail/:bookId" element={<BookDetail/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
