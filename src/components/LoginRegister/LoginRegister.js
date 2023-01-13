import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginRegister({url}) {

    const [login, setLogin] = useState('');
    const [password, setpassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setLogin(username);
    };
    const onChangePassword = (e) => {
        const name = e.target.value;
        setpassword(name);
      };
      const onChangeName = (e) => {
        const password = e.target.value;
        setName(password);
      };

    const handleLogin = () => {

        const loginData = {
          "email": login,
          "password": password,
          "name" : name
        }

        const api = axios.create({
          baseURL: url
        })
    console.log(loginData)
        api.post("/auth/signup", loginData)

            .then(res => {
                console.log(res)
                navigate("/front_dofus/signin");
          })
            .catch(error=>{
                setMessage("Auth failure! Please create an account");
            })
      };
    return (
        <div className="relative flex flex-col justify-center
    ">
        <div className="w-full p-6 m-auto bg-gray-900 -mt-2  lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-white  uppercase ">
               Inscription
            </h1>
            <form  className="mt-6">
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-white"
                    >
                        Adresse Email
                    </label>
                    <input
                        type="text"
                        name="login"
                        className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-bleu200 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={login}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-white"
                    >
                        Pseudo
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-bleu200 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-white"
                    >
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-bleu focus:ring-bleu200 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

                <div className="mt-6">
                    <button type="button" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-bleu" onClick={handleLogin}>
                        Inscription
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-white">
                {" "}
                Déjà un compte?{" "}
                <a
                    href="#"
                    className="font-medium text-bleu hover:underline"
                >
                    Se connecter
                </a>
            </p>
        </div>
    </div>
    );
}

export default LoginRegister;
