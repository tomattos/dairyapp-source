import React from "react";
import "./index.css";

const Task = props => {
  const { removeTask, changeActiveTask } = props;
  const { title, id, comments, active } = props.properties;
  let taskItem = null;

  const handleClickButton = e => {
    e.preventDefault();
    const id = e.target.parentNode.id;
    removeTask(id);
  };

  const handleClickTask = e => {
    e.preventDefault();
    if (
      !e.target.classList.contains("task--button") &&
      !taskItem.classList.contains("active")
    ) {
      changeActiveTask(taskItem.id);
    }
  };

  return (
    <a
      href=""
      className={active ? `active task` : "task"}
      id={id}
      ref={link => {
        taskItem = link;
      }}
      onClick={handleClickTask}
    >
      <span className="task--name">{title}</span>
      <span className="task--number">{comments.length}</span>
      <button className="task--button button" onClick={handleClickButton}>
        Delete
      </button>
    </a>
  );
};

export default Task;
