import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions";
import "./index.css";

let Form = ({ dispatch }) => {
  let formInput = null;

  const handleSubmit = e => {
    e.preventDefault();

    if (formInput.value.trim() === "") return;
    dispatch(addTask(formInput.value));

    formInput.value = "";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form--input"
        ref={input => {
          formInput = input;
        }}
        placeholder="Type name here..."
      />
      <button type="submit" className="button form--button">
        Add new
      </button>
    </form>
  );
};

Form = connect()(Form);

export default Form;
