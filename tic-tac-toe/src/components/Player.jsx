import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayeName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClik() {
    setIsEditing((editing) => !editing);
  }
  function handleChnage(event) {
    setPlayeName(event.target.value)
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = "Edit"
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChnage}
      />
    );
    // btnCaption="Save"
  }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClik}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
