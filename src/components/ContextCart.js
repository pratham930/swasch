import React, { useContext } from "react";
import "./cart.css";
import Atom from "./Atom";
import { CartContext } from "./Cart";
import { NavLink } from "react-router-dom";

const ContextCart = () => {
  const { item, totalItem } = useContext(CartContext);
  return (
    <>
      <div>
        <div className="mar">
          <h4>
            <img src="/assets/restaurant_24px.svg" alt="" srcset="" />
            Swasch Restaurant
          </h4>
          <button className="top">
            <img
              className="img"
              src="https://i.pinimg.com/originals/4e/51/1a/4e511adb8ca405f8893af07c9e2b885f.png"
              alt="Italian Trulli"
            />
            <NavLink className="active_class" to="/mart">
              <h6>{totalItem}</h6>
            </NavLink>
          </button>
        </div>
        {item.map((event) => {
          return <Atom key={event.id} {...event} />;
        })}
      </div>
    </>
  );
};

export default ContextCart;
