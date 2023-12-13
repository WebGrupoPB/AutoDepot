import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/Nosotros.scss"



const Nosotros = () => {
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroNosotros-section">
                    <h1>¿QUIENES SOMOS?</h1>
                </section>

                <section className="Nosotros-section">
                    <div className="nosotros-area">
                        <aside className="nosotrosImage-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Nosotros/quienesSomos-img.png" alt="nosotros-img" />
                        </aside>

                        <article className="nosotrosText-space">
                            <h2>¿QUIENES SOMOS?</h2>

                            <p>
                                Bienvenido a AutoDepot, donde la excelencia en el servicio se encuentra con la experiencia 
                                automotriz de vanguardia. Estamos aquí para cuidar de su vehículo como si fuera 
                                nuestro propio tesoro sobre ruedas.
                            </p>

                            <p>
                                Somos una empresa líder en el ramo automotriz que iniciamos un 18/01/2014, 
                                nuestra primer agencia fue en el área de villa hermosa brindando servicios de mecánica 
                                rápida.
                            </p>

                            <p>
                                ofreciendo gran variedad de servicio en un solo punto en mantenimiento de 
                                tipo preventivo y correctivo para todas las marcas y modelos de vehículos con precio 
                                competitivo pensando en su total satisfacción. 
                            </p>

                            <p>
                                <span>
                                    contamos con 4 agencias, 3 en la ciudad y una departamental.
                                </span>
                            </p>
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

export default Nosotros;