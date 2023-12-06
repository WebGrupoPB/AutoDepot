import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Contacto.scss"


const Contacto = () => {
    return (
        <>
            <section className="contacto-section">
                <div className="contacto-space">
                    <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/contacto-img.png" alt="" />
                    <p>
                        Recibir  notificaciones de nuestras <span>ofertas</span> y <span>ubicaciones</span>
                    </p>

                    <form action="">
                        <input type="email" placeholder="ejemplocorreo@hotmail.com" />
                        <button type="submit">
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/submit-img.svg" alt="submit-btn" />
                        </button>
                    </form>
                </div>
             </section>
        </>
    )
}

export default Contacto;
