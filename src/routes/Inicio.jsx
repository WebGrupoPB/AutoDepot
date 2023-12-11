import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import AgendarFiltro from "../components/AgendarFiltro";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Inicio.scss"



const Inicio = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroInicio-section">
                </section>

                <AgendarFiltro />

                <section className="marcas-section">
                    <article className="title">
                        <h1>Nuestras Marcas</h1>
                    </article>

                    <aside className="carrusel-logos-space">
                        <CarruselLogos direction={"left"} />
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

export default Inicio;