import React, { Component } from "react";

import { ExampleComponent } from "oscar_lib_test";
import { Bootstrap } from "oscar_lib_test";
export default class App extends Component {
  render() {
    return (
      <div>
        <Bootstrap title="Title from props" message="message from props" />
        <ExampleComponent text="Modern React component module V2" />
      </div>
    );
  }
}
