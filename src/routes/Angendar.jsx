import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Agendar.scss"



const Agendar = () => {
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroAgendar-section">
                    <h1>Agendar Cita</h1>
                </section>

                <section className="agendar-section">
                    <div className="agendar-area">
                        <aside className="imageService-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/coverService-img.png" alt="" />
                        </aside>

                        <article className="formService-space">
                            <form action="">

                            </form>
                        </article>
                    </div>
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

export default Agendar;