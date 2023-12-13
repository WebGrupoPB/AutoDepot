import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MapFooter from './MapFooter';


import './styles/Footer.scss';



const Footer = () => {

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
                        donde la excelencia en el servicio se encuentra con la experiencia 
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

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon"/>
                    <p>Calzada Atanasio Tzul 20.74 Z.12</p>
                </span>

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon" className='gps-icon' />
                    <p>Villa Hermosa 1, 23 calle 20-90 Z.7.San Miguel Petapa</p>
                </span>

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon" className='gps-icon2' />
                    <p>Álamos 0Av. 1-87 Z.6 San Miguel Petapa</p>
                </span>
            </div>

            <p className='footer-info-copyright'>
                Todos los derechos reservados ©GPB Logistic, 2023 | Desarrollado Grupo PB
            </p>
        </article>

        <aside className='footer-map'>
            <MapFooter />
        </aside>
    </footer>
  );

};

export default Footer;