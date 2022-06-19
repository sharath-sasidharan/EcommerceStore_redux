import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";
export const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
