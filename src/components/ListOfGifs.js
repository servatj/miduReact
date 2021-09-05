import React from 'react';
import gif from './Gif';

const listOfGifs = ({id, title, url}) => {
    return <Gif
              id={id}
              key={id}
              title={title}
              url={url}
            />
}