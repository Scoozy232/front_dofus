import React from 'react';
import CardItem from "../CardItem/CardItem";
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import vita from '../../assets/carac/vita.png'
import crit from '../../assets/carac/crit.png'
import './ListMenu.css'

function ListMenu({title}) {
    return (
        <div>
            <h1 className={'text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-grey'}>{title}</h1>
            <div className="grid grid-cols-4 gap-4">
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />
                <CardItem image={turquoise} title={'Dofus Turquoise'} underTitle={'Donne 1% de dommage finaux par crit'}
                          level={'Niveau : 160'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={crit} alt="critique"/> <span className="font-normal text-gray-700 dark:text-gray-400">10% critique</span>
                          </li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/2'}
                          href2={'/dofus'}
                />
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />
                <CardItem image={emeraude} title={'Dofus Emeraude'} underTitle={'Donne 100% du bouclier à son porteur'}
                          level={'Niveau : 100'}
                          underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/> <span className="font-normal text-gray-700 dark:text-gray-400">200 vitalité</span></li>}
                          buttonText1={'Comment obtenir'}
                          buttonText2={'Acquis !'}
                          href1={'/dofus/1'}
                          href2={'/dofus'}
                />

            </div>
        </div>
    );
}

export default ListMenu;
