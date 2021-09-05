import React from 'react';
import Gif from './Gif';

const ListOfGifs = ({ gifs = [] }) => {
    return gifs.map(({ id, title, url }) => {
      return <Gif key={id} id={id} title={title} url={url}/>
    });
}

export default ListOfGifs;