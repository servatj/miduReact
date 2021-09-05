import React from 'react';
import ListOfGifs from '../../components/ListOfGifs';

export default function Detail({ params }) {
    return <>
        <h1>Gif by id (params.id)</h1>
        <ListOfGifs params={params} />
    </>
}