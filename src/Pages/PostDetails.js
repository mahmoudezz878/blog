import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const data = localStorage.getItem("blogList");
    const newData = JSON.parse(data);
    const post = newData.filter((data) => +data.id === +id)[0];
    setPost(post);
  }, []);

  return <div>
  <div>autherv: {post.auther}</div>
  <div>title: {post.title}</div>
  <div>text: {post.text}</div>
  </div>;
};

export default PostDetails;
