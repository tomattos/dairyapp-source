import React from "react";
import CommentAvatar from "../CommentAvatar";
import "./index.css";

const Comment = ({ text, index }) => (
  <div className="comment">
    <CommentAvatar bg={index % 2 === 0 ? "#FF8A00" : "#47568C"} />
    <p className="comment--text">{text}</p>
  </div>
);

export default Comment;
