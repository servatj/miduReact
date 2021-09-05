import React, { useState, useEffect } from "react";
import requestsGifs from '../services/getGifs';
import Gif from "./Gif";

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestsGifs({ keyword }).then(setGifs);
  }, [keyword]);

  return gifs.map(({ id, title, url }) => {
    return <Gif key={id} id={id} title={title} url={url} />;
  });
};

export default ListOfGifs;
