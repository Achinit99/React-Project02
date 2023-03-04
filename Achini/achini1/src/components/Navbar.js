import React from "react";
import { MenuData } from "./MenuData";

function Navbar() {
  return (
    <div>
      <nav className="NavbarItem">
        <h1>
          React <i className="fab fa-react"></i>
        </h1>
        <ul>
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
