import React from "react";


function Entry(props) {
  return (
    <div >
      <div className="card" key={props.blog._id} >
        <h2>{props.blog.title}</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>{props.blog.body}</p>
      </div>
    </div>
  );
}

export default Entry;
