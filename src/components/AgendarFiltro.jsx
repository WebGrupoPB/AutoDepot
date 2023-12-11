import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/AgendarFiltro.scss"



const AgendarFiltro = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <>         
            <section className="agendaCita-section">
                <div className="agendaCita-space">

                    <Link to={"/agendar/alineacion-y-balanceo"} className="agenda-item" onClick={scrollToTop}>
                        <aside className="img-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img1.png" alt="" />
                            <h2>ALINEACIÓN Y BALANCEO</h2>
                        </aside>

                        <article className="text-space">
                            <h3>AGENDAR CITA</h3>
                        </article>
                    </Link >

                    <Link to={"/agendar/enderezado-y-pintura"} className="agenda-item" onClick={scrollToTop}>
                        <aside className="img-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img2.png" alt="" />
                            <h2>ENDEREZADO Y PINTURA</h2>
                        </aside>

                        <article className="text-space" style={{ backgroundColor: "#4A529F" }}>
                            <h3>AGENDAR CITA</h3>
                        </article>
                    </Link >

                    <Link to={"/agendar/diagnostico-de-scanner"} className="agenda-item" onClick={scrollToTop}>
                        <aside className="img-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img3.png" alt="" />
                            <h2>DIAGNÓSTICO DE SCANNER</h2>
                        </aside>

                        <article className="text-space">
                            <h3>AGENDAR CITA</h3>
                        </article>
                    </Link >

                    <Link to={"/agendar/mecanica-rapida"} className="agenda-item" onClick={scrollToTop}>
                        <aside className="img-space">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/AgendaCita/Agendacita-img4.png" alt="" />
                            <h2>MECÁNICA RAPIDA</h2>
                        </aside>

                        <article className="text-space" style={{ backgroundColor: "#4A529F" }}>
                            <h3>AGENDAR CITA</h3>
                        </article>
                    </Link >

                    <Link to={"/agendar/llantas-y-baterias"} className="agenda-item" onClick={scrollToTop}>
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
        </>
    )
}

export default AgendarFiltro;