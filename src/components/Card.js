import React, { useEffect, useState } from "react";
import "../css/card.css";
import { AiOutlineHeart } from "react-icons/ai";

function Card(props) {
  const product = props.product;
  const [isLiked, setIsLiked] = useState(false);
    // console.log(product);

  const updateLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      product.isLiked = true;
      // console.log(product);
    } else {
      product.isLiked = false;
    }
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <span>cost: ${product.price}</span>
      <img src={product.image}></img>
      <AiOutlineHeart
        onClick={() => {
          updateLike();
          console.log(product);
        }}
        style={{ backgroundColor: isLiked ? "red" : "white", border: "none" }}
      />
    </div>
  );
}

export default Card;
