import React from "react";
import './Gif.css';

export default function gif({ id, url, title }) {
  return (
    <a href={url} className="Gif">
      <h4>{title}</h4>
      <h5>{id}</h5>
      <img src={url} alt={`gif${title}`} />
    </a>
  );
}
