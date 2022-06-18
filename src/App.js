import React, { useState } from "react";
import "../src/style/styles.css";
import TableList from "./components/TableList";
import MyInput from "./components/UI/button/Input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "MERN Stack" },
    { id: 2, title: "TypeScript", stack: "MEVN Stack" },
    { id: 3, title: "Python", stack: "Full-Stack" },
    { id: 4, title: "Java", stack: "MEAN Stack" },
  ]);

  return (
    <div className="app w-50 mx-auto ">
      <form className="mt-3 mb-4">
        <h4 className="text-center">Create your first post</h4>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Programming Language"
        />
        <MyInput
          type="text"
          className="form-control my-3"
          placeholder="Enter your favourite stack"
        />
        <MyButton>Add Post</MyButton>
      </form>
      <TableList posts={posts} title={"Programming Language"} />
    </div>
  );
}

export default App;
