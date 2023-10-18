import React, { useState } from "react";

export default function Component() {
  const [text, setText] = useState("Wlcome");
  const upperCase=()=>{
    let upDate = text.toUpperCase();
    setText(upDate);
  }
  const handleClick=(event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <input type="text" value={text}  onChange={handleClick} placeholder="Your first name" />
      <button onClick={upperCase}>Uppercase</button>
      <div>
        <h1>Text summay</h1>
        <p>{text.split(" ").length} words, {text.length} character</p>
        <p>this text wil read in {text.split(" ").length/125} munits</p>
      </div>
    </>
  );
}
