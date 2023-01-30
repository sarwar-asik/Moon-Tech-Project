import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actionType";

const initialState ={
    test:"Test",
    cart:['']
};

const productReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case REMOVE_FROM_CART:
            return {}
        default:
            return state
    }
}    
export default productReducer