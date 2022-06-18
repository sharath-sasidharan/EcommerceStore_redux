import {ActionTypes} from '../constants/action-types'


export const setProducts = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
};

export const selectedProduct = (productId)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:productId
    }
}
export const removeSelectedProduct = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}