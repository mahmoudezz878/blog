import { useState, useEffect, useContext } from "react";
import PostCard from "./Card/PostCard";
import Navbar from "./NavBar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import { CardContext, PostContext } from "./PostContext";

function App() {
  const [card, setCard] = useState(() => {
    const saved = localStorage.getItem("blogList");
    const initialValue = JSON.parse(saved);

    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("blogList", JSON.stringify(card));
  }, [card]);

  const handelDelete = (id) => {
    console.log({ id });
    const newPost = card.filter((_card) => {
      return +_card.id !== +id;
    });

    setCard(newPost);
  };
  // const {post, setPost} = useContext(CardContext);

  return (
    <BrowserRouter>
      <PostContext>
        <Navbar card={card} setCard={setCard} />
        <Routes>
          <Route
            path="/"
            element={
              <Home card={card} setCard={setCard} handelDelete={handelDelete} />
            }
          />
          <Route path="/postdetails/:id" element={<PostDetails />} />
        </Routes>
      </PostContext>
    </BrowserRouter>
  );
}

export default App;
