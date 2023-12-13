import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CarruselLogos from "../components/CarruselLogos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
export const API_SERVER = 'https://9zgcz19tsg.execute-api.us-east-1.amazonaws.com/dev-api/email-agendar-cita';


import "./styles/AgendarForm.scss"



const AgendarForm = ({linkSetting}) => {
    const urlBackground = `url('https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Form-Images/${linkSetting}.png')`;

    const backgroundStyle = {
        backgroundImage: urlBackground,
    };

    const formattedServiceType = linkSetting.replace(/-/g, ' ');

    // Estado inicial para los datos del formulario
    const initialFormData = {
        service: formattedServiceType,
        email: '',
        phone: '',
        name: '',
        date: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(API_SERVER , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log("Datos enviados, antes del if");

            if (response.ok) {
                // Manejar la respuesta exitosa aquí
                console.log('Solicitud enviada con éxito');
                setIsSubmitted(true);

                // Restablecer el formulario borrando los datos
                setFormData(initialFormData);
            } else {
                // Manejar errores aquí
                console.error('Error al enviar solicitud en else');
                setIsSubmitted(true);
                setFormData(initialFormData);
            }
        } catch (error) {
            console.error('Error al enviar solicitud en catch', error);
            setIsSubmitted(true);
            setFormData(initialFormData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [isSubmitted, setIsSubmitted] = useState(false);  
    const buttonText = isSubmitted ? 'Solicitud Enviada' : 'Enviar Solicitud';

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
                            onSubmit={handleSubmit}
                            className="agendarForm"
                        >         

                            <aside className="formGroup-1">
                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Letter.svg" alt="email-icon" />
                                    </aside>
                                    
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="CORREO ELECTRÓNICO" 
                                        id=""
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div> 

                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/Phone.svg" alt="phone-icon" />
                                    </aside>

                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="NÚMERO TELEFÓNICO" 
                                        id=""
                                        value={formData.phone}
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <aside>
                                        <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Agendar/User.svg" alt="user-icon" />
                                    </aside>

                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="NOMBRE COMPLETO" 
                                        id=""
                                        value={formData.name}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>                    
                            </aside>
                                            
                            <aside className="formGroup-2">
                                <div className="date-group">
                                    <h3>FECHA</h3>
                                    <input 
                                        type="date" 
                                        name="date" 
                                        id="" 
                                        className="dateInput"
                                        value={formData.date}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <button type="submit" className="submitBtn"> 
                                    <span>
                                        {buttonText}
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