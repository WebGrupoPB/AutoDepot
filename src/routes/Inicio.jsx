import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Inicio.scss"



const Inicio = () => {
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroInicio-section">
                </section>

                <section className="agendaCita-section">
                    <div className="agendaCita-space">

                        <Link className="agenda-item">
                            <aside className="img-space">
                                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img1.png" alt="" />
                                <h2>ALINEACIÓN Y BALANCEO</h2>
                            </aside>

                            <article className="text-space">
                                <h3>AGENDAR CITA</h3>
                            </article>
                        </Link >

                        <Link  className="agenda-item">
                            <aside className="img-space">
                                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img2.png" alt="" />
                                <h2>ENDEREZADO Y PINTURA</h2>
                            </aside>

                            <article className="text-space" style={{ backgroundColor: "#4A529F" }}>
                                <h3>AGENDAR CITA</h3>
                            </article>
                        </Link >

                        <Link  className="agenda-item">
                            <aside className="img-space">
                                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img3.png" alt="" />
                                <h2>DIAGNÓSTICO DE SCANNER</h2>
                            </aside>

                            <article className="text-space">
                                <h3>AGENDAR CITA</h3>
                            </article>
                        </Link >

                        <Link  className="agenda-item">
                            <aside className="img-space">
                                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img4.png" alt="" />
                                <h2>MECANICÁ RAPIDA</h2>
                            </aside>

                            <article className="text-space" style={{ backgroundColor: "#4A529F" }}>
                                <h3>AGENDAR CITA</h3>
                            </article>
                        </Link >

                        <Link  className="agenda-item">
                            <aside className="img-space">
                                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img5.png" alt="" />
                                <h2>Llantas y Baterías</h2>
                            </aside>

                            <article className="text-space">
                                <h3>AGENDAR CITA</h3>
                            </article>
                        </Link >
    
                    </div>
                </section>

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