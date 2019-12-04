import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import HomePage from "./HomePage.jsx";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
