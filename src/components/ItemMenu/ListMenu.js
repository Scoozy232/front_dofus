import React from 'react';
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import vita from '../../assets/carac/vita.png'
import crit from '../../assets/carac/crit.png'
import './ListMenu.css'




function ListMenu({title, url}) {

    const [dofus, setDofus] = React.useState("");
    console.log(url)
    React.useEffect(() => {
        axios.get(url,{
            headers: {
                "Access-Control-Allow-Origin" : "*",
                 "Content-type": "Application/json",
                Authorization :  JSON.parse(localStorage.getItem("user")).token,
                email : "florian.aubin@laposte.net"
            }
        }).then((response) => {
            //const data = response;
            setDofus(response.data);
            console.log(response.data)
        }).catch(err => console.log(err));
    }, []);
    
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <h1 className={'text-center'}>{title}</h1>
            <div className="row">
            {
                Array.from(dofus).map((item, i) => 
                <CardItem image={emeraude} title={item.nom} underTitle={item.propriete}
                level={item.niveau}
                underLevel={<li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/><span className="font-normal text-gray-700 dark:text-gray-400"> {item.stat_native}</span>
                </li>}
                buttonText1={'Comment obtenir ?'}
                buttonText2={'Acquis !'}
                href1={'/dofus/1'}
                href2={'/dofus'}
            />
                
                )
            }
                 
            </div>
        </div>
    );
}

export default ListMenu;
