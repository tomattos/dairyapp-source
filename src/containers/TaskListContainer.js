import { connect } from "react-redux";
import { removeTask, changeActiveTask } from "../actions";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  removeTask(id) {
    dispatch(removeTask(id));
  },
  changeActiveTask(id) {
    dispatch(changeActiveTask(id));
  }
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TaskList
);

export default TaskListContainer;
