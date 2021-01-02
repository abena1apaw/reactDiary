import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function footer() {
  const footerStyle = {
    backgroundColor: "#000000",
    color: "#fff",
    padding: "10px 15px",
  };

  return (
    <header style={footerStyle}>
      <h1 style={{ fontSize: "14px", lineHeight: "1.4em", margin: "0px" }}>
        The Apaws Diary
      </h1>
    </header>
  );
}

export default footer;
