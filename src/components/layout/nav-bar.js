import React from "react";
import { styles } from "./nav-bar.module.css";

function NavBar({ children }) {
  return <nav>{children}</nav>;
}

export default NavBar;
