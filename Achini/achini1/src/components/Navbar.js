import React from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyls.css";

function Navbar() {
  return (
    <div>
      <nav className="NavbarItem">
        <h1 className="logo">
          React <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icons">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
