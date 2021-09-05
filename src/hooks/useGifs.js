import { useState, useEffect } from 'react';
import requestsGifs from '../services/getGifs';
import getSingleGif from '../services/getGifsById';

export default function useGifs({ keyword, id }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      const createOrGetKeyword = keyword || localStorage.getItem('lastKeyword')
      if (id) {
        getSingleGif({ id })
        .then(setGifs)
        .then(data => setLoading(false));
      } else {
        requestsGifs({ keyword: createOrGetKeyword })
          .then(setGifs)
          .then(data => setLoading(false));
      }
      localStorage.setItem('LastKeyword', keyword);
    }, [keyword, id]);

    return {loading, gifs}
}
