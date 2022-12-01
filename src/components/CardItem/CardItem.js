import React from 'react';
import {Link} from "react-router-dom";
import './CardItem.css'

function CardItem({image, title, underTitle, level, underLevel, buttonText1, buttonText2, href1, href2}) {
    return (
        <div className={"card m-3 backCard"} >
            <img className={"card-img-right"} src={image} alt={'image'}/>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{underTitle}</p>
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item">{level}</li>
                {underLevel}
            </ul>
            <div className="card-body justify-content-evenly row">
                <button className={"btn btn-primary col-5"}><Link className={'text-light text-decoration-none'} to={href1}>{buttonText1}</Link></button>
                <button className={"btn btn-success col-5"}><Link className={'text-light text-decoration-none'} to={href2}>{buttonText2}</Link></button>
            </div>
        </div>
    );
}

export default CardItem;
