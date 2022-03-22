import { useState, useEffect, useContext } from "react";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import { useSelector, useDispatch } from "react-redux";
import { initializePosts } from "./actions";

function App() {
  const blogs = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      const saved = localStorage.getItem("blogList");
      const initialValue = JSON.parse(saved);
      dispatch(initializePosts(initialValue || []));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogList", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
