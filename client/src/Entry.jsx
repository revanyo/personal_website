import React from "react";

function Entry(props) {
  return (
    <div>
      <div className="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default Entry;
