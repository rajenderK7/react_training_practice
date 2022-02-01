import React from "react";
import { useSelector } from "react-redux";
import styles from "../product_form/ProductForm.module.css";
import CartItem from "./CartItem";
import classes from "./UserCart.module.css";

const UserCart = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className={styles["product-form"]}>
      {products.length === 0 && (
        <p className="lead text-start text-dark fw-bold m-auto">
          Cart is empty.
        </p>
      )}
      {products.length !== 0 && (
        <ul>
          {products.map((product, index) => {
            return (
              <CartItem
                key={index}
                className={classes["cart-item"]}
                title={product.productName}
                quantity={product.productQuantity}
              ></CartItem>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserCart;
