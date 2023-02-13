import React, { useContext } from "react";
import { NewsContext } from "../context";

export default function NewsList() {
  const { filteredNews } = useContext(NewsContext);
  return (
    <div className="m-3">
      <h2>News List</h2>
      {filteredNews?.map(({ title, body }) => (
        <div className="m-3 border p-3">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
