import React from "react";
import { CartState } from "../context/Context";

export const MenuItem = ({ item }) => {
  //prod = item for me
  //   const [count, setCount] = useState(0);

  const { image, title, subtitle, price } = item;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  //   const handleIncrement = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const handleDecrement = () => {
  //     if (count < 1) {
  //       count = 0;
  //       setCount(count);
  //     }
  //     setCount((prevCount) => prevCount - 1);
  //   };

  return (
    <article className="singleMenuItem">
      <div className="menuImageContainer">
        <img src={image} className="menuImage" alt={title} />
      </div>
      <div className="text">
        <h1 className="menuTitle">{title}</h1>
        <p className="menuSubtitle">{subtitle}</p>
        <div className="price-button">
          <p className="menuPrice">{price}</p>
          {cart.some((p) => p.id === item.id) ? (
            <button
              type="button"
              className="btn removeCartBtn"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              type="button"
              className="btn addCartBtn"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
