import React, { Component } from "react";
import ReactDOM from "react-dom";

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        React in a modern way.
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
