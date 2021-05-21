import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import axios from "axios";
import Entry from "./Entry.jsx";
import FollowMe from './Follow.jsx';
import About from './About.jsx';
import Popular from './Popular.jsx';
import Post from './Post.jsx';

function App(props) {

  const [blogs, setBlogs] = useState([])
  const [post, setPost] = useState(false)

  useEffect(() => {
    axios.get('/blogs').then((response) => {
      setBlogs(response.data)
    })
  }, [])

  let view;

  if (post === false) {
    view = <List blogs={blogs} />
  } else {
    view = <Post />
  }

  return (
    <div>
      <div className="row">
        <div className="leftcolumn">
          {view}
        </div>
        <div className="rightcolumn">
          <About />
          <Popular />
          <FollowMe />
          <button onClick={() => { setPost(true); { window.scrollTo({ top: 0, behavior: 'smooth' }) } }}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default App;
