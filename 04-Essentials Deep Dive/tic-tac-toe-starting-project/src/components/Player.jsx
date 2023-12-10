import { useState } from "react";

export default function Player({ name, symbol }) {
  /* Component Instance Work in Isolation
    If the state in this first player component instance here changes, the second player component instance does not care about that at all. It doesn't even know about that.*/
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(!isEditing); // do not update the state based on the previous state like this, use the function form instead.
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
