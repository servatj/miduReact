import React from "react";

export default function gif({ id, url, title }) {
  return (
    <>
      <h4>{title}</h4>
      <h5>{id}</h5>
      <img src={url} alt={`gif${title}`} />
    </>
  );
}
