import React, { useState } from "react";
import "../src/style/styles.css";
import Counter from "./components/Counter";
import InputValue from "./components/InputValue";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <React.Fragment>
      <div className="app w-50 mx-auto">
        <Counter />
        <hr />
        <InputValue />
        <ToggleBtn />
      </div>
    </React.Fragment>
  );
}

export default App;
