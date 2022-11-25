import React from 'react';
import emeraude from '../../assets/dofus/emeraude.png'
import vita from '../../assets/vita.png'

function CardItem() {
    return (
        <div className={"card m-3"} style={{width: 18 + "rem"}}>
            <img className={"card-img-right"} src={emeraude} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Dofus Emeraude</h5>
                <p className="card-text">Donne 100% du bouclier à son porteur</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Niveau : 100</li>
                <li className="list-group-item"><img src={vita} alt={"vitalité"}/>200 vitalité</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body justify-content-evenly row">
                <button className={"btn btn-primary col-5"}>Comment obtenir ?</button>
                <button className={"btn btn-success col-5"}>Acquis !</button>
            </div>
        </div>
    );
}

export default CardItem;
