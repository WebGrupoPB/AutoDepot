import React, {useState} from "react";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Contacto.scss"


const Contacto = () => {
    const initialFormData = {
        email: '',
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

                // Restablecer el formulario borrando los datos
                setFormData(initialFormData);
            } else {
                // Manejar errores aquí
                console.error('Error al enviar solicitud en else');
                setFormData(initialFormData);
            }
        } catch (error) {
            console.error('Error al enviar solicitud en catch', error);
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

    return (
        <>
            <section className="contacto-section">
                <div className="contacto-space">
                    <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/Inicio/contacto-img.png" alt="" />
                    <p>
                        Recibir  notificaciones de nuestras <span>ofertas</span> y <span>ubicaciones</span>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="ejemplocorreo@hotmail.com" 
                            value={formData.email}
                            onChange={handleChange} 
                        />
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
