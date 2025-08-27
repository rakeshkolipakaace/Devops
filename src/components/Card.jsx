import React from "react";
export default function Card({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
