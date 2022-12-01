import React from 'react';
import CardItem from "../CardItem/CardItem";

function ListMenu({title}) {
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <h1 className={'text-center'}>{title}</h1>
            <div className="row">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
    );
}

export default ListMenu;
