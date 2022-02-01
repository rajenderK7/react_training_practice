import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ProductForm.module.css";
import { addProduct } from "../store_slices/productSlice";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (productObj) => {
    const actionObj = addProduct(productObj);
    dispatch(actionObj);
    reset();
  };

  return (
    <div className={styles["product-form"]}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div>
          <label htmlFor="product-name" className="form-label">
            Product Name:
          </label>
          <input
            id="product-name"
            type="text"
            className="form-control"
            {...register("productName", { required: "required" })}
          ></input>
          {errors.productName && (
            <p className="text-start text-danger">*Required quantity</p>
          )}
        </div>
        <div>
          <label htmlFor="product-quantity" className="form-label">
            Quantity:
          </label>
          <input
            id="product-quantity"
            type="number"
            className="form-control"
            defaultValue="1"
            min="1"
            {...register("productQuantity", { required: "required" })}
          ></input>
          {errors.productQuantity && (
            <p className="text-start text-danger">*Required quantity</p>
          )}
        </div>
        <div>
          <button type="submit" className={styles["submit-button"]}>
            Add to to Cart
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
