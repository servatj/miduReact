import React from "react";
import { Link } from "wouter";
import './Gif.css';

export default function gif({ id, url, title }) {
  return (
    <div className="Gif">
      <Link to={url} >
        <h4>{title}</h4>
      </Link>
        <h5>{id}</h5>
        <img src={url} alt={`gif${title}`} />
    </div>
  );
}
