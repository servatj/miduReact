import { useState, useEffect } from 'react';
import requestsGifs from '../services/getGifs';
import getSingleGif from '../services/getGifsById';

export default function useGifs({ keyword, id }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      if (id) {
        getSingleGif({ id })
        .then(setGifs)
        .then(data => setLoading(false));
      } else {
        requestsGifs({ keyword })
          .then(setGifs)
          .then(data => setLoading(false));
      }
    }, [keyword, id]);

    return {loading, gifs}
}
