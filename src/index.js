import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello there. React in a modern way!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
