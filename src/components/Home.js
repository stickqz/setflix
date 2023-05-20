import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests.js";
import "../Css/Home.css";

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        requests.fetchNetflixOriginals + Math.floor(Math.random() * 5) + 1
      );
      setdata(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
      return res;
    }
    getData();
  }, []);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`,
      }}
    >
      <div className="home_section">
        <h1>{data?.original_name || data?.titlename || data?.name}</h1>
        <div className="press">
          <button>Play</button>
          <button>More</button>
        </div>
        <p>{data.overview}</p>
      </div>
    </div>
  );
}

export default Home;
