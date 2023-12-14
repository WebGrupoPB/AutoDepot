import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/CarruselLogos.scss"


const CarruselLogos = ({direction, logosInfo }) => {
    const slidetrackClassName = `slide-track${direction ? `-${direction}` : ''}`;

    return (
        <>
            <div className="slider">
                <div className={slidetrackClassName}>
                    {logosInfo.map((logo, index) => (
                        <div className="slide" key={index}>
                            <img src={logo}  alt="logo" className="logo-img" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarruselLogos;
