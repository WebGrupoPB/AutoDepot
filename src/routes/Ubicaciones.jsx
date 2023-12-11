import React, {useState} from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import MapsUbi from "../components/MapsUbications";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Ubicaciones.scss"



const Ubicaciones = () => {

    const [currentId, setCurrentId] = useState(0);

    const onToggle = (id) => {
        setCurrentId(id);
    };

    /* const textAlert = setCurrentId(1) ? "hola" : ""; */

    const scrollToMap = () => {
        window.scrollTo({ top: 1200, behavior: 'smooth' });
    };

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
                        <div className="filtro-item" onClick={() => { onToggle(0); scrollToMap(); }} >
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Ubicaciones/guatemalaCover.png" alt="" />
                            <h1>Guatemala</h1>
                        </div>

                        <div className="filtro-item" onClick={() => { onToggle(1); scrollToMap(); }} >
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Ubicaciones/elSalvadorCover.png" alt="" />
                            <h1>El Salvador</h1>
                        </div>
                    </section>

                    <aside className="googleMap-area">
                        <div className="googleMap-space">
                            <MapsUbi id={currentId} />
                        </div>

                        <div className="textAlert-space">
                            {currentId === 1 && (
                                <p>
                                    <span>Importante</span>: Solo cambio de llantas.
                                </p>
                            )}
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