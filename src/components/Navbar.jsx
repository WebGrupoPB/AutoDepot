import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./styles/Navbar.scss"


  
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuIcon = menuOpen ? "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/closeMenu-Icon.svg" : "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/openMenu-.svg"

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Agregar un efecto para desactivar el menú en pantallas más grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    // Agregar un event listener para el documento principal
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


    return (
        <header className='navbar-space'>
            <nav className="navbar-desktop">
                <div className="navMenu-space">
                    <aside className={`burgerMenu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </aside>
                    <h4>Menu</h4>
                </div>

                <div className="navLogo-space">
                    <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Autodepot-Logo-Navbar.svg" alt="autodepot-logo" />
                </div>

                <div className="navLinks-space">
                    <NavLink to={"#"}>
                        AGENDAR CITA
                    </NavLink>

                    <NavLink to={"#"}>
                        UBICACIONES
                    </NavLink>
                </div>
            </nav>

            <nav className="navbar-mobile">

            </nav>

            <aside className={`slidevar-menu ${menuOpen ? 'active' : ''}`}>
                <div className="navLinks-space">
                    <NavLink to={"#"}>
                        Inicio
                    </NavLink>

                    <NavLink to={"#"}>
                        Servicios
                    </NavLink>

                    <NavLink to={"#"}>
                        Agendar Cita
                    </NavLink>

                    <NavLink to={"#"}>
                        Ubicaciones
                    </NavLink>

                    <NavLink to={"#"}>
                        ¿Quienes somos?
                    </NavLink>

                    <NavLink to={"#"}>
                        Promociones
                    </NavLink>
                    <NavLink to={"#"}>
                        Empleo
                    </NavLink>
                </div>

                <div className="socialMedia-space"> 
                    <h3>Redes Sociales</h3>
                    <div>
                        <Link>
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Instagram-Icon.svg" alt="instagram-icon" />
                        </Link>
                        <Link>
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Facebook-Icon.svg" alt="facebook-icon" />
                        </Link>
                        <Link>
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/TikTok-Icon.svg" alt="tiktok-icon" />
                        </Link>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Navbar;