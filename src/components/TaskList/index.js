import React from "react";
import Task from "../Task";
import "./index.css";

const TaskList = props => {
  let { tasks, removeTask, changeActiveTask } = props;

  const list = tasks.map((task, index) => {
    return (
      <Task
        key={index.toString()}
        properties={task}
        removeTask={removeTask}
        changeActiveTask={changeActiveTask}
      />
    );
  });

  return <div className="task-list">{list}</div>;
};

export default TaskList;
