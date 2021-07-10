import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';
export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("Cantidad de productos");
        console.log("Accion de ", action);
        console.log("Nombe del producto ", name);

        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}