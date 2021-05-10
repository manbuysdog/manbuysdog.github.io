import React from "react";
import NavBarItem from "./nav-bar-item";
import * as styles from "./navigation.module.css";

function Navigation() {
  return (
    <div style={{ display: "flex" }}>
      <ul className={styles.navigation}>
        <NavBarItem name="HOME" route="/" />
        <NavBarItem name="BLOG" route="/blog" />
        <NavBarItem name="SHOP" route="/shop" />
        <NavBarItem name="ABOUT" route="/about" />
      </ul>
    </div>
  );
}

export default Navigation;
