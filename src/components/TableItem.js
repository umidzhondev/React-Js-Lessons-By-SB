import React from "react";
import MyButton from "./UI/button/MyButton";

export default function TableItem(props) {
    console.log(props);
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <MyButton>delete</MyButton>
      </td>
    </tr>
  );
}
