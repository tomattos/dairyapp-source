import React, { Component } from "react";
import Sidebar from "../Sidebar";
import Main from "../Main";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar>
          <h1 className="sidebar--title">DAIRY APP</h1>
          <span className="sidebar--subtitle">Comment with no sense</span>
        </Sidebar>
        <Main />
      </div>
    );
  }
}

export default App;
