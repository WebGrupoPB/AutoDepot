import React from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import AgendarForm from "../components/AgendarForm";
import AgendarFiltro from "../components/AgendarFiltro";


import "./styles/Agendar.scss"



const Agendar = () => {
    const { serviceType } = useParams();
    const formattedServiceType = serviceType.replace(/-/g, ' ');

    const isFiltred = serviceType == "agendar-cita" ? true : false;

    const titlePage =   serviceType == "alineacion-y-balanceo" ? "ALINEACIÓN Y BALANCEO":
                        serviceType == "enderezado-y-pintura"  ? "ENDEREZADO Y PINTURA":
                        serviceType == "diagnostico-de-scanner"  ? "DIAGNÓSTICO DE SCANNER":
                        serviceType == "mecanica-rapida"  ? "MECÁNICA RÁPIDA":
                        serviceType == "llantas-y-baterias"  ? "LLANTAS Y BATERÍAS": "LLANTAS Y BATERÍAS";
                                
    return (
        <>         
            <main className="not-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <section className="heroAgendar-section">
                    <h1>{titlePage}</h1>
                </section>

                
                {/* si serviceType es agendar-cita */}
                {isFiltred && (
                    <AgendarFiltro />
                )}
                
                {/* si serviceType es agendar-cita */}


                {/* si serviceType no es agendar-cita */}

                {!isFiltred && (
                    <>
                        <AgendarForm linkSetting={serviceType} />

                        <AgendarFiltro />
                    </>          
                )}
                
                {/* si serviceType no es agendar-cita */}

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