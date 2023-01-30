import { ADD_TO_CART } from "../actionType/actionType"

export const addToCart =product =>{
    return {
        type:ADD_TO_CART,
        payload:product,
    }
}