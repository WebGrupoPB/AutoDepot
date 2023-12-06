import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/CarruselLogos.scss"

const logosInfo = [
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img1.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img2.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img3.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img4.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img5.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img1.svg",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/Marcas/carrusel-img2.svg",

];

const CarruselLogos = ({direction}) => {
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
