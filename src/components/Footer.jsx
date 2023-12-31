import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MapFooter from './MapFooter';


import './styles/Footer.scss';



const Footer = () => {
    const [currentId, setCurrentId] = useState(0);

    const onToggle = (id) => {
        setCurrentId(id);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <footer className='footer-space'>
        <header className='footer-logo'>
            <div className='footer-logo-space'>
                <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Autodepot-Logo-Navbar.svg" alt="" className='footer-logo-img' />

                <div className='footer-nosotros-text'>
                    <h6>Nosotros</h6>
                    <p>
                        <strong>¡Bienvenido a AutoDepot!</strong>
                    </p>

                    <p>
                        Donde la excelencia en el servicio se encuentra con la experiencia 
                        automotriz de vanguardia. Estamos aquí para cuidar de su vehículo como si fuera nuestro 
                        propio tesoro sobre ruedas.
                    </p>
                </div>
            </div>
        </header>

        <article className='footer-info'>
            <div className='footer-info-contactos'>
                <h6>Contactanos</h6>

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/phone_icon_Footer.svg" alt="phone-icon" />
                    <p>PBX: 2247-3333</p>
                </span>
                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/phone_icon_Footer.svg" alt="phone-icon" />
                    <p>PBX: 6635-4536</p>
                </span>
            </div>

            <div className='footer-info-ubicaciones'>
                <h6>Ubicaciones</h6>

                <NavLink 
                to={"/ubicaciones"}
                onClick={() => { onToggle(0);}}
                >
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon"/>
                    <p  onClick={() => { onToggle(0);}}>
                        Calzada Atanasio Tzul 20-11 Z.12
                    </p>
                </NavLink>

                <NavLink 
                to={"/ubicaciones"}
                onClick={() => { onToggle(1);}}
                >
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon" className='gps-icon' />
                    <p  onClick={() => { onToggle(1);}}>
                        Villa Hermosa 1, 23 calle 20-90 Z.7.San Miguel Petapa
                    </p>
                </NavLink>

                <NavLink 
                to={"/ubicaciones"} 
                onClick={() => { onToggle(2);}}
                >
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon" className='gps-icon2' />
                    <p  onClick={() => { onToggle(2);}}>
                        Álamos 0 Av. 1-87 Z.6 San Miguel Petapa
                    </p>
                </NavLink>
            </div>

            <p className='footer-info-copyright'>
                Todos los derechos reservados ©Auto Depot, 2023 | Desarrollado Grupo PB
            </p>
        </article>

        <aside className='footer-map'>
            <MapFooter id={currentId} />
        </aside>
    </footer>
  );

};

export default Footer;