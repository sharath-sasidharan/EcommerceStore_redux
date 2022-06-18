import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
export const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
