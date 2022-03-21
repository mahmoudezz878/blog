import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "../Card/PostCard";

const Home = ({card, handelDelete}) => {
  return (
    <Grid container spacing={2}>
      {card.map((cards) => (
        <PostCard key={cards.id} cards={cards} handelDelete={handelDelete} />
      ))}
    </Grid>
  );
};

export default Home;
