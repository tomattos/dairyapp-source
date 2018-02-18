import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions";
import CommentAvatar from "../../components/CommentAvatar";
import "./index.css";

let CommnetForm = ({ tasks, onPressKey }) => {
  const handleKeyPress = e => {
    let value = e.target.value;

    if (e.keyCode === 13 && e.ctrlKey && value.trim() !== "") {
      onPressKey(value);

      e.target.value = "";
    }
  };

  return (
    <div className="comment-form">
      <CommentAvatar bg="#E6E6E6" />
      <textarea
        className="comment-form--field"
        disabled={tasks.length === 0 ? true : false}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onPressKey(text) {
    dispatch(addComment(text));
  }
});

CommnetForm = connect(mapStateToProps, mapDispatchToProps)(CommnetForm);

export default CommnetForm;
