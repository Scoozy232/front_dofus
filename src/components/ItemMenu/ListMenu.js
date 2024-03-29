import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import emeraude from '../../assets/dofus/emeraude.png'
import donjon from '../../assets/navBar/donjon.png'
import quest from '../../assets/navBar/quest.png'
import vita from '../../assets/carac/vita.png'
import './ListMenu.css'
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar';


function ListMenu({title, url, img}) {


    const [dofus, setDofus] = useState("");
    const json = localStorage.getItem("user");
    const token = JSON.parse(json);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                Authorization: token.token,
                email: token.user.email
            }
        }).then((response) => {
            setDofus(response.data);
            console.log(response.data)
        }).catch(err => navigate("/front_dofus/welcolme"));
    }, [url]);

    function underlevel(statNative) {
        if (statNative != null) {
            return <li className={"flex items-center mb-3 "}><img src={vita} alt="vitalité"/><span
                className="font-normal text-gray-700 dark:text-gray-400"> {statNative} </span>
            </li>
        } else {
            return null;
        }
    }

    function immage(){
        if(img == "dofus"){
            return <div className="grid md:grid-cols-2 md:gap-2 lg:gap-4 lg:grid-cols-4 grid-cols-1 gap-1">
            {
                Array.from(dofus).map((item, i) =>
                    <CardItem key={item._id} image={emeraude} title={item.nom} underTitle={item.propriete}
                              level={item.niveau}

                              underLevel={underlevel(item.stat_native)}
                              buttonText1={'L\'obtenir ?'}
                              buttonText2={'Acquis !'}
                              href1={"/dofus/"+item.id}
                              href2={'/dofus'}
                    />
                )
            }


        </div>
        }else if(img == "quest"){
            return <div className="grid md:grid-cols-2 md:gap-2 lg:gap-4 lg:grid-cols-4 grid-cols-1 gap-1">
            {
                Array.from(dofus).map((item, i) =>
                    <CardItem key={item._id} image={quest} title={item.nom} underTitle={item.propriete}
                              level={item.niveau}

                              underLevel={underlevel(item.stat_native)}
                              buttonText1={'L\'obtenir ?'}
                              buttonText2={'Réalisé !'}
                              href1={"/quest/"+item.id}
                              href2={'/quest'}
                    />
                )
            }

        </div>
        }else{
            return <div className="grid md:grid-cols-2 md:gap-2 lg:gap-4 lg:grid-cols-4 grid-cols-1 gap-1">
            {
                Array.from(dofus).map((item, i) =>
                    <CardItem key={item._id} image={donjon} title={item.nom} underTitle={item.propriete}
                              level={item.niveau}

                              underLevel={underlevel(item.stat_native)}
                              buttonText1={'L\'obtenir ?'}
                              buttonText2={'Réalisé !'}
                              href1={"/donjon/"+item.id}
                              href2={'/donjon'}
                    />
                )
            }

        </div>
        }
    }

    return (
        <div className={'d-flex flex-column align-items-center min-h-full relative h-full pb-10'}>

        <NavBar url="https://dofus-api-ynvz.onrender.com/api/auth/isConnected"/>
            <h1 className={'text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-grey'}>{title}</h1>
            {immage()}
        </div>
    );
}

export default ListMenu;
