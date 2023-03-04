import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="NavbarItem">
        <h1>
          React <i className="fab fa-react"></i>
        </h1>
        <ul>
          <li>
            <a href="index.html">
              <i className="fa-solid fa-house-user"> Home</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
