import { connect } from "react-redux";
import CommentList from "../components/CommentList";

const mapStateToProps = state => ({
  tasks: state.tasks
});

const CommentListContainer = connect(mapStateToProps)(CommentList);

export default CommentListContainer;
