import React from "react";

function App(props) {
  return (
    <div>
      <ul>
        {data.map((num) => (
          <div>{num}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
