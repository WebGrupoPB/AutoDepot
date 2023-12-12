import React from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


import "./styles/AgendarForm.scss"



const AgendarForm = ({linkSetting}) => {
    const urlBackground = `url('https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Form-Images/${linkSetting}.png')`;

    const backgroundStyle = {
        backgroundImage: urlBackground,
    };

    return (
        <>         
            <section className="agendar-section">
                <div className="agendar-area">
                    <aside className="imageService-space" style={backgroundStyle}>
                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/coverService-img.png" alt="" />
                    </aside>

                    <article className="formService-space">
                        <h1>AGENDA TU CHEQUEO</h1>

                        <form 
                            action="" 
                            method=""
                            className="agendarForm"
                        >         

                            <aside className="formGroup-1">
                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Letter.svg" alt="email-icon" />
                                    </aside>
                                    
                                    <input type="email" name="" placeholder="CORREO ELECTRÓNICO" id="" />
                                </div> 

                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Phone.svg" alt="phone-icon" />
                                    </aside>

                                    <input type="tel" name="" placeholder="NÚMERO TELEFÓNICO" id="" />
                                </div>

                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/User.svg" alt="user-icon" />
                                    </aside>

                                    <input type="text" name="" placeholder="NOMBRE COMPLETO" id="" />
                                </div>                    
                            </aside>
                                            
                            <aside className="formGroup-2">
                                <div className="date-group">
                                    <h3>FECHA</h3>
                                    <input type="date" name="" id="" className="dateInput" />
                                </div>

                                <button type="submit" className="submitBtn"> 
                                    <span>
                                        Enviar Solicitud
                                    </span>
                                </button>
                            </aside>
                        </form>
                    </article>
                </div>
            </section>
        </>
    )
}

export default AgendarForm;