import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  /* Component Instance Work in Isolation
    If the state in this first player component instance here changes, the second player component instance does not care about that at all. It doesn't even know about that.*/
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // do not update the state based on the previous state like this, use the function form instead.
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // event.targert refers to the element that did trigger the event, in this case the input element. And this input element has a value property which holds the current value of the input.
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
