import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({url}) {

    const [login, setLogin] = useState('');
    const [password, setpassword] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setLogin(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setpassword(password);
      };

    const handleLogin = () => {

        const loginData = {
          "email": login,
          "password": password
        }
        
        const api = axios.create({
          baseURL: url
        })
    
        api.post("/auth/login", loginData)
        
            .then(res => {           
              localStorage.setItem("user", JSON.stringify(res.data));
            })
            .then(res => {             
                navigate("/accueil");
          })
            .catch(error=>{
                setMessage("Auth failure! Please create an account");
            })
      };
    return (
        <div className="relative flex flex-col justify-center top-10">
        <div className="w-full p-6 m-auto bg-white -mt-2  lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-lime-500  uppercase ">
               Connexion
            </h1>
            <form  className="mt-6">
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-lime-500"
                    >
                        Nom d'utilisateur
                    </label>
                    <input
                        type="text"
                        name="login"
                        className="block w-full px-4 py-2 mt-2 text-lime-500 bg-white border rounded-md focus:border-purple-400 focus:ring-bleu200 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={login} 
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-lime-500"
                    >
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="block w-full px-4 py-2 mt-2 text-lime-500 bg-white border rounded-md focus:border-bleu focus:ring-bleu200 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-lime-500 hover:underline"
                >
                    Mot de passe oublié?
                </a>
                <div className="mt-6">
                    <button type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-500 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-bleu" onClick={handleLogin}>
                        Connexion
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-lime-500">
                {" "}
                Pas encore de compte?{" "}
                <a
                    href="#"
                    className="font-medium text-bleu hover:underline"
                >
                    S'inscrire
                </a>
            </p>
        </div>
    </div>
    );
}

export default Login;
