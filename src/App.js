import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
