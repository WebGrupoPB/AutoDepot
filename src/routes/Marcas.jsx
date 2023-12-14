import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Marcas.scss"


const logosAll = [
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Puma-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Soil-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/GoodYear-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Bosch-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Boto-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Delmax-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/GreenTour-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Hankook-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Kumho-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/LTH-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Nankang-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Varta-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Winda-logo.png",    
];

const logosLlantas = [
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/GoodYear-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Delmax-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Boto-logo.png",    
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/GreenTour-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Hankook-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Kumho-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Nankang-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Winda-logo.png",    
];

const logosLubricantes = [
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Puma-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Soil-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Puma-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Soil-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Puma-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Soil-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Puma-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Soil-logo.png",
];

const logosBaterias = [
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Bosch-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Hankook-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/LTH-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Varta-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Bosch-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Hankook-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/LTH-logo.png",
    "https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Marcas/Logos-marcas/Varta-logo.png",
];




const Marcas = () => {
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroMarcas-section">
                    <h1>Nuestras Marcas</h1>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>llantas</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"left"} logosInfo={logosLlantas}/>
                        
                    </aside>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>lubricantes</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"right"} logosInfo={logosLubricantes} />
                    </aside>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>baterías</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"left"} logosInfo={logosBaterias} />
                    </aside>
                </section>

                {/* <section className="marcas-section">
                    <article className="title">
                        <h1>consumibles</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"right"} logosInfo={logosAll} />
                    </aside>
                </section> */}

                <section className="contacto-area">
                    <Contacto />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Marcas;