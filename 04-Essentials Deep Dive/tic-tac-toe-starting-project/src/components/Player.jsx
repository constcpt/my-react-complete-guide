import { useState } from "react";

export default function Player({ name, symbol }) {
  /* Component Instance Work in Isolation
    If the state in this first player component instance here changes, the second player component instance does not care about that at all. It doesn't even know about that.*/
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
