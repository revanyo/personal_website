import React from "react";
import axios from 'axios';


function Entry(props) {

  const deleteEntry = (key) => {
    console.log(key)
    axios.delete('/blogs/' + key).then(() => {
      console.log('deleted')
    })
  }

  return (
    <div >
      <div className="card"  >
        <h2>{props.blog.title}</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>{props.blog.body}</p>
        <button onClick={() => deleteEntry(props.blog._id)}>Delete</button>
      </div>
    </div >
  );
}

export default Entry;
