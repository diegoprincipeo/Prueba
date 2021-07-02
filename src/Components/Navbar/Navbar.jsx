import React from "react";


import Cart from "./Cart/Cart";

const NavBar = () => {
    return (
        <> 
            <div className="navbar-start">
                <h1>Maket Maribel</h1>
                <ul className="categorias">
                    <li className="categoria-item">Inicio</li>
                    <li className="categoria-item">Productos</li>
                    <li className="categoria-item">Promociones</li>
                    <li className="categoria-item">Iniciar Sesion</li>
                </ul>
                <div className="navbar-end">
                <Cart />
                </div>
            </div>

        </>
    );
};

export default NavBar