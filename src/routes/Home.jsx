import React from "react";
import Navbar from "../components/Navbar";


import "./styles/Home.scss"


const Home = () => {
    return (
        <>
            <main className="cover-home">
                <header className='header-navbar'>
                    <Navbar />
                </header>

                <div className="overlay-home">
                    <aside className="title">
                        <h1>SERVICIOS AUTOMOTRICES</h1>
                    </aside>
                </div>
            </main>
        </>
    )
}

export default Home;