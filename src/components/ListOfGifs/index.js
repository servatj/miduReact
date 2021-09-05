import React, { useState, useEffect } from "react";
import requestsGifs from '../../services/getGifs';
import getSingleGif from '../../services/getGifsById';

import Gif from "../Gif";

const ListOfGifs = ({ params = { keyword: 'messi' } }) => {
  const { keyword, id } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    if (id) {
      getSingleGif({ id })
      .then(setGifs)
      .then(data => setLoading(false));
    } else {
      console.log({ keyword, id })
      requestsGifs({ keyword })
        .then(setGifs)
        .then(data => setLoading(false));
    }
  }, [keyword, id]);

  return <>
    {
      loading ?
      <i>Loading</i>
      : gifs.map(({ id, title, url }) => {
        return <Gif key={id} id={id} title={title} url={url} />;
      })
    }
  </>
};

export default ListOfGifs;
