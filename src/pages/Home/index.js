import React from "react";
import { Link } from "wouter";

const FOOTBALL_GIFS = ["Messi", "Neymar", "CR7", "Mbappe"];

export default function Home() {
  return (
    <>
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
