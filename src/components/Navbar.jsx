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

  const scrollToAgendar = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
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
                    <NavLink to={"/agendar/agendar-cita"} onClick={scrollToTop}>
                        AGENDAR CITA
                    </NavLink>

                    <NavLink to={"/ubicaciones"} onClick={scrollToTop}>
                        UBICACIONES
                    </NavLink>
                </div>
            </nav>

            <aside className={`slidevar-menu ${menuOpen ? 'active' : ''}`}>
                <div className="navLinks-space">
                    <NavLink to={"/inicio"} activeClassName="active" onClick={scrollToTop}>
                        Inicio
                    </NavLink>

                    {/* <NavLink to={"/servicios"} activeClassName="active" onClick={scrollToTop}>
                        Servicios
                    </NavLink> */}

                    <NavLink to={"/agendar/agendar-cita"} activeClassName="active" onClick={scrollToTop}>
                        Agendar Cita
                    </NavLink>

                    <NavLink to={"/ubicaciones"} activeClassName="active" onClick={scrollToTop}>
                        Ubicaciones
                    </NavLink>

                    <NavLink to={"/nosotros"} activeClassName="active" onClick={scrollToTop}>
                        ¿Quienes somos?
                    </NavLink>

                    <NavLink to={"/marcas"} onClick={scrollToTop}>
                        Marcas
                    </NavLink>
                    {/* <NavLink to={"/empleo"} onClick={scrollToTop}>
                        Empleo
                    </NavLink> */}
                </div>

                <div className="socialMedia-space"> 
                    <h3>Redes Sociales</h3>
                    <div>
                        <Link>
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Instagram-Icon.svg" alt="instagram-icon" />
                        </Link>
                        <Link
                            to={"https://www.facebook.com/AUTODEPOTGT"}
                        >
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/Facebook-Icon.svg" alt="facebook-icon" />
                        </Link>
                        {/* <Link>
                            <img src="https://s3.amazonaws.com/autodepot.la/Recursos-Autodepot/General/TikTok-Icon.svg" alt="tiktok-icon" />
                        </Link> */}
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Navbar;
