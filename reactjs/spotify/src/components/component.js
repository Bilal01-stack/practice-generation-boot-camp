import React, { useState } from "react";

export default function Component() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  const upperCase=()=>{
    let upDate = text.toUpperCase();
    setText(upDate);
  }
  const handleClick=(event)=>{
    setText(event.target.value);
  }
  const changeColor=()=>{
    setColor("red");
  }
  return (
    <>
      <input type="text" value={text} style={{ color: color }}  onChange={handleClick} placeholder="Your first name" />
      <button onClick={upperCase}>Uppercase</button>
      <button onClick={changeColor}>Change Color</button>
      <div>
        <h1>Text summay</h1>
        <p>{text.split(" ").length}  words, {text.length} character</p>
        <p>this text wil read in {text.split(" ").length/125} munits</p>
        <h1>Preview</h1>
        <p style={{ color: color }}>{text}</p>
      </div>
    </>
  );
}
