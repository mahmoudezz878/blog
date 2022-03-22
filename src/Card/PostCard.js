import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions";

const PostCard = ({ cards }) => {
  const dispatch = useDispatch();
  return (
    <Grid style={{margin: '20px'}} item xs={12} sm={4} md={4} xg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {cards.auther}
            </Avatar>
          }
          title={cards.title}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cards.text}
          </Typography>
        </CardContent>
        <Button
          onClick={() => dispatch(deletePost(cards.id))}
          variant="contained"
          style={{ margin: "10px" }}
        >
          Delete
        </Button>
        <Link to={`/postdetails/${cards.id}`}>
          <Button variant="contained">Card Details</Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default PostCard;
