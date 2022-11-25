import React from 'react';
import CardItem from "../CardItem/CardItem";

function ListMenu({title}) {
    return (
        <div>
            <h1>{title}</h1>
            <CardItem></CardItem>
        </div>
    );
}

export default ListMenu;
