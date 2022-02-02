import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../slices/prorductSlice";
import DisplayCard from "../../UI/DisplayCard";

const ProductList = () => {
  let dispatch = useDispatch();
  const { products, isPending, hasError, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    const actionObject = fetchUsers("https://fakestoreapi.com/products");
    dispatch(actionObject);
  }, []);

  return (
    <div className="mt-1">
      {isPending && <h3 className="text-center text-info mt-5">Loading...</h3>}
      {hasError && (
        <h2 className="text-center lead text-danger mt-5">{errorMessage}</h2>
      )}
      {!isPending && !hasError && (
        <div>
          <h1 className="text-center text-dark">Products</h1>
          {products.map((product) => {
            return (
              <DisplayCard
                key={product.id}
                category={product.category}
                rating={product.rating.rate}
                link={product.image}
                title={product.title}
                price={product.price}
              ></DisplayCard>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
