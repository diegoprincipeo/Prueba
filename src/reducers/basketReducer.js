import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../actions/types";
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        AceitePrimor: {
            name: "Aceite Primor",
            tagName: 'AceitePrimor',
            price: 6.00,
            numbers: 0,
            inCart:false
        },
        AceiteSao: {
            name: "Aceite Sao",
            tagName: 'AceiteSao',
            price: 5.00,
            numbers: 0,
            inCart:false
        },
        ArrozCosteno: {
            name: "Arroz Costeño",
            tagName: 'ArrozCosteno',
            price: 3.00,
            numbers: 0,
            inCart:false
        },
        LecheGloria: {
            name: "Leche Gloria",
            tagName: 'LecheGloria',
            price: 3.00,
            numbers: 0,
            inCart:false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected= "";
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
            if(productSelected.numbers === 10) {
                productSelected.numbers = 10;
            } else {
                productSelected.numbers += 1;
            }
        return {
            ...state,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
                ...state.products,
                [action.payload]:productSelected
            }
            }
        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]};
            let newCartCost = 0;
            if(productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
            }
        return {
            ...state,
            cartCost: newCartCost,
            products: {
                ...state.products,
                [action.payload]:productSelected
            }
            }  
        default:
            return state;
    }
}