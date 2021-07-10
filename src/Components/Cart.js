import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';

import AceitePrimor from '../asssets/AceitePrimor.jpg';
import AceiteSao from '../asssets/AceiteSao.jpg';
import ArrozCosteno from '../asssets/ArrozCosteño.jpg';
import LecheGloria from '../asssets/LecheGloria.jpg';

function Cart({basketProps, productQuantity}) {
    console.log(basketProps);

    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    //const productImages = [AceitePrimor,AceiteSao,ArrozCosteno,LecheGloria]
    const productImages = (product) =>{
        if(product.tagname === 'AceitePrimor'){
            return AceitePrimor;
        } else if(product.tagname === 'AceiteSao'){
            return AceiteSao;
        } else if(product.tagname === 'ArrozCosteno'){
            return ArrozCosteno;
        } else if(product.tagname === 'LecheGloria'){
            return LecheGloria;
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("Mi producto es");
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">S/. {product.price}.00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)}className="increase" name="arrow-forward-circle-outline"></ion-icon>    
                </div>
                <div className="total">S/.{product.numbers * product.price}.00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">Producto</h5>
                <h5 className="price sm-hide">Precio</h5>
                <h5 className="quantity">Cantidad</h5>
                <h5 className="total">Total</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Total de Compra</h4>
                <h4 className="basketTotal">S/.{basketProps.cartCost}.00</h4>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});
export default connect(mapStateToProps, { productQuantity } )(Cart);
