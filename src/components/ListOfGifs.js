import React, { useState, useEffect } from "react";
import requestsGifs from '../services/getGifs';
import Gif from "./Gif";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    requestsGifs({ keyword })
      .then(setGifs)
      .then(data => setLoading(false));
  }, [keyword]);

  return <>
    {
      loading ?
      <>Loading</>
      : gifs.map(({ id, title, url }) => {
        return <Gif key={id} id={id} title={title} url={url} />;
      })
    }
  </>
};

export default ListOfGifs;
