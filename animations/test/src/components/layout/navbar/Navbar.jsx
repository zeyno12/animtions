import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <section>
      <header>
        <nav>
             <ul>
                  <li>
                    <NavLink to="/">
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/animationsvg">
                      <p>Animationsvg</p>
                    </NavLink>
                  </li>
                </ul>
        </nav>
      </header>
    </section>
  );
};
export default Navbar;
