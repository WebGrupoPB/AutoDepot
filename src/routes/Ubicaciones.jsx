import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Ubicaciones.scss"



const Ubicaciones = () => {
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroUbicaciones-section">
                    <h1>UBICACIONES</h1>
                </section>

                <section className="MapUbication-section">
                    <article className="title">
                        <h1>Ubicaciones</h1>
                    </article>

                    <section className="filtroMaps-area">
                        <div className="filtro-item">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Ubicaciones/guatemalaCover.png" alt="" />
                            <h1>Guatemala</h1>
                        </div>

                        <div className="filtro-item">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Ubicaciones/elSalvadorCover.png" alt="" />
                            <h1>El Salvador</h1>
                        </div>
                    </section>

                    <aside className="googleMap-area">
                        <div className="googleMap-space">

                        </div>
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

export default Ubicaciones;