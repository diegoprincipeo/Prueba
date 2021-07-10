import React, { useState } from 'react';
import AceitePrimor from '../asssets/AceitePrimor.jpg';
import AceiteSao from '../asssets/AceiteSao.jpg';
import ArrozCosteno from '../asssets/ArrozCosteño.jpg';
import LecheGloria from '../asssets/LecheGloria.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    //activador son todos los redux instalados
    return(
        <div className="container">
            <div className="image">
                <img src={AceitePrimor} width="230px" alt="Aceite Primor"/>
                <h3>Aceite Primor</h3>
                <h3>6.00</h3>
                <a onClick={()=> props.addBasket('AceitePrimor')} className="addToCart cart1" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={AceiteSao} width="230px" alt="Aceite Sao"/>
                <h3>Aceite Sao</h3>
                <h3>5.00</h3>
                <a onClick={()=> props.addBasket('AceiteSao')} className="addToCart cart2" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={ArrozCosteno} width="230px" alt="Arroz Costeño"/>
                <h3>Arroz Costeño</h3>
                <h3>3.00</h3>
                <a onClick={()=> props.addBasket('ArrozCosteno')} className="addToCart cart3" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={LecheGloria} width="230px" alt="Leche Gloria"/>
                <h3>Leche Gloria</h3>
                <h3>3.00</h3>
                <a onClick={()=> props.addBasket('LecheGloria')} className="addToCart cart4" href="#">Agregar al carrito</a>
            </div>     
        </div>
    );
}
export default connect(null, { addBasket })(Home);