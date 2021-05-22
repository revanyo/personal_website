import React from "react";
import axios from 'axios';


function Entry(props) {
  return (
    <div >
      <div className="card"  >
        <h2>{props.blog.title}</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>{props.blog.body}</p>
        <button onClick={() => props.deleteEntry(props.blog._id)}>Delete</button>
        <button onClick={() => props.likeEntry(props.blog._id)}>Like</button><p>{props.blog.likeCount}</p>
      </div>
    </div >
  );
}

export default Entry;
