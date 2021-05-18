import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import axios from "axios";
import Entry from "./Entry.jsx";
import FollowMe from './Follow.jsx';
import About from './About.jsx';
import Popular from './Popular.jsx';

function App(props) {
  return (
    <div>
      <div className="row">
        <div className="leftcolumn">
          <Entry />
        </div>
        <div className="rightcolumn">
          <About />
          <Popular />
          <FollowMe />
        </div>
      </div>
    </div>
  );
}

export default App;
