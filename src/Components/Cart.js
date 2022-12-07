import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";

export const Cart = () => {
  const [total, setTotal] = useState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  return (
    <div className="cart">
      <div className="productContainer">
        <div className="cartHeader">
          <h2 className="cartheading">Cart</h2>
          {cart.length > 0 ? (
            <button
              onClick={() =>
                dispatch({
                  type: "CLEAR_CART",
                  payload: cart,
                })
              }
              type="button"
              className="btn clearBtn"
            >
              Clear Cart
            </button>
          ) : (
            <p></p>
          )}
        </div>
        <div className="underline"></div>
        {cart.map((item) => {
          return (
            <>
              <div className="header">
                <img className="cartImage" src={item.image} alt={item.title} />
                <p className="cartTitle">{item.title}</p>
              </div>
              <p className="cartSubtitle">{item.subtitle}</p>
              <div className="cartPrice-button">
                <p className="cartPrice">{item.price}</p>
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    })
                  }
                >
                  Delete
                </button>
              </div>
              <div className="underline2"></div>
            </>
          );
        })}
        {cart.length > 0 ? (
          <div className="filters summary">
            <span className="subtotal">Subtotal ({cart.length}) items</span>
            <br />
            {/* <span style={{ fontWeight: 700, fontSize: 20 }}>
              Total: ₹ {total}
            </span> */}
          </div>
        ) : (
          <h4 className="emptyCartMessage">Cart is Empty</h4>
        )}
      </div>
    </div>
  );
};
