import React from 'react';
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import emeraude from '../../assets/dofus/emeraude.png'
import turquoise from '../../assets/dofus/turquoise.png'
import vita from '../../assets/carac/vita.png'
import crit from '../../assets/carac/crit.png'
import './ListMenu.css'




function ListMenu({title}) {

    const [dofus, setDofus] = React.useState("");
    const baseURL = "http://localhost:3001/api/dofus";

    React.useEffect(() => {
        axios.get(baseURL,{
            headers: {
                "Access-Control-Allow-Origin" : "*",
                 "Content-type": "Application/json",
                Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzkxZjVjMTBkMDE4NTk1NjQ3NTk4NTMiLCJpYXQiOjE2NzA1MTAyNDEsImV4cCI6MTY3MDU5NjY0MX0.d5VH8ZHQtgTDW09W3RkHaG05eeS2ehksPbiIzRgwTMo",
                email : "florian.aubin@laposte.net"
            }
        }).then((response) => {
            const data = response;
            setDofus(response.data);
            console.log(response.data)
        }).catch(err => console.log(err));
    }, []);
    
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <h1 className={'text-center'}>{title}</h1>
            <div className="row">
                {
                    dofus.map((item, i) => 
                    <CardItem image={emeraude} title={item.nom} underTitle={item.propriete}
                    level={item.niveau}
                    underLevel={<li className="list-group-item"><img src={vita} alt="vitalité"/> {item.stat_native}
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
