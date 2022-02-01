import React from "react";

const CartItem = (props) => {
  return (
    <li className={props.className}>
      <div>
        <h3>
          <span>
            <small style={{ fontSize: "15px" }}>Product:</small>
          </span>{" "}
          {props.title}
        </h3>
      </div>
      <h3>
        <span>
          <small style={{ fontSize: "15px" }}>Quantity:</small>
        </span>{" "}
        {props.quantity}
      </h3>
    </li>
  );
};

export default CartItem;
