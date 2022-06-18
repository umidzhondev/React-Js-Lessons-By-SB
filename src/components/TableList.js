import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

export default function TableList({posts,title}) {
  return (
    <>
      <h2 className="text fs-4 text-center">{title}</h2>
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {posts.map((post, index) => (
            <TableItem post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
