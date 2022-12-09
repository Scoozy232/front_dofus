import React from 'react';
import {Link} from "react-router-dom";
import './CardItem.css'

function CardItem({image, title, underTitle, level, underLevel, buttonText1, buttonText2, href1, href2}) {
    return (
        // <div className={"card m-3 backCard"} >
        //     <img className={"card-img-right"} src={image} alt={'image'}/>
        //     <div className="card-body">
        //         <h3 className="card-title">{title}</h3>
        //         <p className="card-text">{underTitle}</p>
        //     </div>
        //     <ul className="list-group list-group-flush" >
        //         <li className="list-group-item">{level}</li>
        //         {underLevel}
        //     </ul>
        //     <div className="card-body justify-content-evenly row">
        //         <button className={"btn btn-primary col-5"}><Link className={'text-light text-decoration-none'} to={href1}>{buttonText1}</Link></button>
        //         <button className={"btn btn-success col-5"}><Link className={'text-light text-decoration-none'} to={href2}>{buttonText2}</Link></button>
        //     </div>
        // </div>


        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className={"flex flex-col items-center"}>
                <img className="rounded-t-lg" src={image} alt=""/>
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">{underTitle}</p>
                <ul>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">{level}</li>
                    {underLevel}
                </ul>
                <Link to={href1}
                      className="md:mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {buttonText1}
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </Link>
                <Link to={href2}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {buttonText2}
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </Link>
            </div>
        </div>

    );
}

export default CardItem;
