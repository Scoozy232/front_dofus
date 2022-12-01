import React from 'react';
import CardItem from "../CardItem/CardItem";
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import vita from '../../assets/carac/vita.png'
import crit from '../../assets/carac/crit.png'
import './ListMenu.css'

function ListMenu({title}) {
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <h1 className={'text-center'}>{title}</h1>
            <div className="row">
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className="list-group-item"><img src={vita} alt="vitalité"/> 200 vitalité
                          </li>}
                          buttonText1={'Comment obtenir ?'}
                          buttonText2={'Acquis !'}
                          href1={'/donjons'}
                          href2={'/dofus'}
                />
                <CardItem image={turquoise} title={'Dofus Turquoise'} underTitle={'Donne 1% de dommage finaux par crit'}
                          level={'Niveau : 160'}
                          underLevel={<li className="list-group-item"><img src={crit} alt="critique"/> 10% critique
                          </li>}
                          buttonText1={'Comment obtenir ?'}
                          buttonText2={'Acquis !'}
                          href1={'/donjons'}
                          href2={'/dofus'}
                />
            </div>
        </div>
    );
}

export default ListMenu;
