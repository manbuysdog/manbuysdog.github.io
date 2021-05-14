import React from "react";
import * as navBarStyles from "./nav-bar.module.css";

function NavBar({ children }) {
  return <nav className={navBarStyles.nav}>{children}</nav>;
}

export default NavBar;
