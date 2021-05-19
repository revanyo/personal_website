import React from "react";

function Entry(props) {
  console.log(props.blogs[0], 'from entry')
  return (
    <div>
      <div className="card">
        {/* <h2>{props.blogs[0].title}</h2> */}
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        {/* <p>{props.blogs[0].body}</p> */}
      </div>
    </div>
  );
}

export default Entry;
