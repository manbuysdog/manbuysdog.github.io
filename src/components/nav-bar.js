import React from "react";
import { styles } from "./nav-bar.module.css";

function NavBar({ children }) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}

export default NavBar;
