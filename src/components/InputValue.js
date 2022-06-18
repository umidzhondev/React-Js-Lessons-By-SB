import React from "react";
import { useState } from "react";

export default function InputValue(){
  const [value, setValue] = useState("Umidjon");

  return (
    <>
      <p>Value: {value}</p>
      
      <input
        onChange={(event) => setValue(event.target.value)}
        type="text"
        className="form-control"
      />
    </>
  );
};
