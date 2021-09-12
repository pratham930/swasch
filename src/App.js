import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.js";
import Singup from "./components/Singup";
import Mart from "./components/Mart";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/mart" component={Mart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div className="home">
      <h1> cheack out our menu items</h1>
      <button className="now">
        <NavLink className="active_class" to="/cart">
          ORDER NOW!
        </NavLink>
      </button>
    </div>
  );
};
const Nav = () => {
  return (
    <div className="menustyle">
      <ul>
        <li>
          <NavLink className="active_class" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="active_class" to="/cart">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="active_class" to="/singup">
            Singup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default App;
