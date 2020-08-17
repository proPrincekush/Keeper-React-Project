import React from "react";

function Foot() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>copyright © {year}</p>
    </footer>
  );
}

export { Foot };
