import React from "react";
import Comment from "../Comment";
import "./index.css";

const CommentList = ({ tasks }) => {
  let taskNumber = "";
  let list;

  const taskActive = tasks.filter((task, index) => {
    if (task.active === true) {
      taskNumber = `#${(index + 1).toString()}`;
    }
    return task.active === true;
  });

  if (taskActive.length !== 0 && taskActive[0].hasOwnProperty("comments")) {
    list = taskActive[0].comments.map((comment, index) => (
      <Comment key={index.toString()} text={comment} index={index} />
    ));
  } else {
    list = "No comments";
  }

  return (
    <div className="comment-list">
      <div className="comment-list--title">Comments {taskNumber}</div>
      {list}
    </div>
  );
};

export default CommentList;
