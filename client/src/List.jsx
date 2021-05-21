import React from "react";
import Entry from "./Entry.jsx";

function List(props) {
  return (
    <div>
      <div className="card">
        {props.blogs.map(blog =>
          <Entry key={blog._id} blog={blog} />
        )}
      </div>
    </div>
  );
}

export default List;
