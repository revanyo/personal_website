import React from "react";
import Entry from "./Entry.jsx";

function List(props) {
  return (
    <div>
      <ul>
        {props.coins.map((coin) => (
          <div key={coin.id}>{coin.name}</div>
        ))}
      </ul>
    </div>
  );
}

export default List;
