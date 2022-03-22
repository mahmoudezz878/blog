import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "../Card/PostCard";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state);

  return (
    <Grid container spacing={2}>
      {card?.map((cards) => (
        <PostCard key={cards.id} cards={cards} />
      ))}
    </Grid>
  );
};

export default Home;
