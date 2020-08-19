import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class FoodStore extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <FoodStore title="Food store" />
      TO będzie moja aplikacja
    </div>
  );
}

export default App;
