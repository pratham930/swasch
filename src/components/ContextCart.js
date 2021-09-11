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
            {" "}
            <img src="/assets/restaurant_24px.svg" alt="" srcset="" />
            Swasch Restaurant{" "}
          </h4>
          <button className="top">
            
            <NavLink className="active_class" to="/mart">
              <h4>{totalItem}</h4>
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
