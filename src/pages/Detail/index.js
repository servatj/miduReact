import React, { useContext } from 'react';
import ListOfGifs from '../../components/ListOfGifs';
import GifsContext from '../../context/GifsContext';

export default function Detail({ params }) {
    const {gifs} = useContext(GifsContext)
    console.log(gifs)
    return <>
        <h1>Gif by id {params.id}</h1>
        <ListOfGifs params={params} />
    </>
}