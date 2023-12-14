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
                                Desde nuestra fundación en Enero 2014, AutoDepot ha destacado como líder en el sector automotriz. Iniciamos nuestra trayectoria con la apertura de nuestra primera agencia en el área de Villa Hermosa, especializándonos en servicios de mecánica rápida.

                            </p>
                                
                            <p>
                            En AutoDepot, nos enorgullece ofrecer una amplia variedad de servicios en un solo lugar, abarcando tanto el mantenimiento preventivo como el correctivo para vehículos de todas las marcas y modelos. Nuestros precios competitivos están diseñados pensando en su total satisfacción.
                            Con el tiempo, hemos expandido nuestra presencia y forma de trabajar con el objetivo primordial de llegar a todos nuestros clientes.  
                            </p>

                            <p>
                                Actualmente contamos con cuatro agencias estratégicamente ubicadas en la ciudad de Guatemala y una en un formato departamental.  Adicionalmente contamos con 7 talleres Auto Depot Express dentro de las tiendas Walmart, 4 en la ciudad de Guatemala y 3 en la ciudad de El Salvador.
                            </p>

                            <p>
                                <span>
                                    En cada una de nuestras ubicaciones, llevamos la misma dedicación a la calidad y el servicio que nos ha convertido en una referencia confiable en el mundo automotriz.
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