import React from "react";
import Box from "../Box";
import Form from "../../containers/Form";
import TaskListContainer from "../../containers/TaskListContainer";
import CommentListContainer from "../../containers/CommentListContainer";
import CommentForm from "../../containers/CommentForm";
import "./index.css";

const Main = () => (
  <div className="main">
    <Box className="task-box">
      <div className="box--title">Items</div>
      <Form />
      <TaskListContainer />
    </Box>
    <Box className="comment-box">
      <CommentListContainer />
      <CommentForm />
    </Box>
  </div>
);

export default Main;
