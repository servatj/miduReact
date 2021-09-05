import React, { useContext } from 'react';
import ListOfGifs from '../../components/ListOfGifs';
import StaticContext from '../../context/StaticContext';

export default function Detail({ params }) {
    const context = useContext(StaticContext)
    console.log(context)
    return <>
        <h1>Gif by id {params.id}</h1>
        <ListOfGifs params={params} />
    </>
}