import React from "react";
import * as styles from "./nav-bar-item.module.css";
import { Link } from "gatsby";

function NavBarItem({ name, route }) {
  return (
    <li className={styles.navLink} >
      <Link to={route}>
        {name}
      </Link>
    </li>
  );
}

export default NavBarItem;
