import React from "react";
import * as styles from "./layout.module.css";
import NavBar from "./nav-bar";
import NavBarItem from "./nav-bar-item";

export default function Layout({ children }) {
  return (
    <div style={{ margin: "0", width: "1024px", padding: `0`, margin: "auto" }}>
      <div className={styles.banner}>
        <NavBar>
          <NavBarItem name="Home" />
          <NavBarItem name="About" />
        </NavBar>
      </div>
      {children}
    </div>
  );
}
