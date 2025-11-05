import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE } from "./CartType"
export const AddToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        payload:item
    }
}   
export const increment=(id)=>{
    return{
        type: INCREMENT,
        payload: id
    }
}
export const decrement =(id)=>{
    return{
        type: DECREMENT,
        payload: id
    }
}
export const remove=()=>{
    return{
        type: REMOVE,
    }
}