import React, { useContext } from "react";
import "./cart.css";
import Fast from "./Fast";
import { MartContext } from "./Mart";
import { NavLink } from "react-router-dom";

const ContextMart = () => {
  const { item, totalAmount,} = useContext(MartContext);
  return (
    <div>
      
      
      {item.map((event) => {
        return <Fast key={event.id} {...event} />;
      })}
      <div>
        <div className="downside">
          
          <h4>
            
            Total(INR): <span>{totalAmount}₹</span>
          </h4>
        </div>
        <a className="check" href="/checkout">
        save and checkout
        </a>

        <NavLink className="active_class" to='/cart'>
          cancel
        </NavLink>
      </div>
    </div>
  );
};

export default ContextMart;
