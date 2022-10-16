import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book/Book";
import Giveback from "./pages/Book/Giveback";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/give-back" element={<Giveback />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
