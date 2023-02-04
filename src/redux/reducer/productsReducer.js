import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actionType";

const initialState ={
cart:[]
};

const productReducer =(state=initialState,action)=>{
    const selectedProducts= state.cart.find(
        product=> product._id === action.payload._id
    )
    
    console.log(selectedProducts);
    switch(action.type){
        case ADD_TO_CART:
            if(selectedProducts){
                const newCart = state.cart.filter(
                    product=>product._id !== selectedProducts._id
                )
                selectedProducts.quantity= selectedProducts.quantity +1
                return {
                    ...state,
                    cart:[...newCart,selectedProducts]
                }
            }
            return {
                ...state,
                cart:[...state.cart,{...action.payload,quantity:1}]
            }
        case REMOVE_FROM_CART:
            if(selectedProducts.quantity >1 ){
                const newCart = state.cart.filter(
                    product  =>  product._id !== selectedProducts._id
                )
                selectedProducts.quantity= selectedProducts.quantity - 1
                return {
                    ...state,
                    cart:[...newCart,selectedProducts]
                }
            }
            return {
                ...state,
                cart :state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state
    }    
}    
export default productReducer