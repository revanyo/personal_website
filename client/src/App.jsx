import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import axios from "axios";
import FollowMe from './Follow.jsx';
import About from './About.jsx';
import Popular from './Popular.jsx';
import Post from './Post.jsx';

function App(props) {

  const [blogs, setBlogs] = useState([])
  const [post, setPost] = useState(false)
  const [deleted, setDeleted] = useState(null)
  const [posted, setPosted] = useState(null)
  const [liked, setLiked] = useState(null)

  useEffect(() => {
    axios.get('/blogs').then((response) => {
      setBlogs(response.data)
    })
  }, [deleted, posted, liked])

  const deleteEntry = (key) => {
    axios.delete('/blogs/' + key).then(() => {
      setDeleted(true);
    })
  }

  const postEntry = (title, body) => {
    axios.post('/blogs', {
      title: title,
      body: body
    }).then(() => {
      setPosted(true);
    })
  }

  const likeEntry = (key) => {
    console.log('clciked')
    axios.put('/blogs/' + key).then(() => {
      setLiked(true)
    })
  }

  let view;

  if (post === false) {
    view = <List blogs={blogs} likeEntry={likeEntry} deleteEntry={deleteEntry} />
  } else {
    view = <Post post={postEntry} />
  }

  return (
    <div>
      <div className="row">
        <div className="leftcolumn">
          {view}
        </div>
        <div className="rightcolumn">
          <button onClick={() => { setPost(true); { window.scrollTo({ top: 0, behavior: 'smooth' }) } }}>Post</button>
          <About />
          <Popular />
          <FollowMe />
        </div>
      </div>
    </div>
  );
}

export default App;
