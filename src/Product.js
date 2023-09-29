import React from "react";
import "./Product.css";
import Star from "./Star.js";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue("");

  const addToBasket = () => {
    //dispatch item into DL
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product__price">
          <strong>Rs.</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Star />
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
