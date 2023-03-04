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
            <a>
              {" "}
              <i className="fa-solid fa-house-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
