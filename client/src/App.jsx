import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import axios from "axios";

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <ul>
        <List coins={data} />
      </ul>
    </div>
  );
}

export default App;
