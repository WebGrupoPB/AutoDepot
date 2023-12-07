import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Marcas.scss"



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
                        <CarruselLogos direction={"left"} />
                        
                    </aside>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>lubricantes</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"right"} />
                    </aside>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>baterías</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"left"} />
                    </aside>
                </section>

                <section className="marcas-section">
                    <article className="title">
                        <h1>consumibles</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"right"}/>
                    </aside>
                </section>

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