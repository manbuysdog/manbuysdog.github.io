import React from "react";
import { styles } from "./nav-bar-item.module.css";

function NavBarItem({ name }) {
  return (
    <li>
      <a>{name}</a>
    </li>
  );
}

export default NavBarItem;
