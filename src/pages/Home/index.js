import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const FOOTBALL_GIFS = ["Messi", "Neymar", "CR7", "Mbappe"];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [, setLocation] = useLocation();

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    setLocation(`/search/${keyword}`)
  }

  const handelChange = (evt) => {
    setKeyword(evt.target.value);
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input type="text" value={keyword} placeholder=" | search" onChange={handelChange}></input>
      </form>
      <title>Home | Giffy</title>
      <h3 className="App-title">Most Popular Gifs</h3>
      <ul>
        {FOOTBALL_GIFS.map((player) => {
          return (
            <li key={player}>
              <Link to={`/search/${player}`}> {player} 's Gif </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
