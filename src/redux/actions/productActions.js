import { ActionTypes } from "../constants/action-types";
import api from "../../API/api";

//! Redux- thunk Methodology Async way : listing Products
export const fetchProducts = () =>  async(dispatch) => {
    const response = await api.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };

//! Redux- thunk Methodology Async way : single detailed Product by id
  export const fetchProduct = (id) =>  async(dispatch) => {
    const response = await api.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };

//! Clean up Function
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
