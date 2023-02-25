import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/troll-face.png"
        className="header--image"
        alt="header"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">
        Inspired by
        <a href="http://Scrimba.com" target="_blank">
          Scrimba
        </a>
      </h4>
    </header>
  );
}
