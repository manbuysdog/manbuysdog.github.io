import React from "react";
import * as styles from "./layout.module.css";
import NavBar from "./nav-bar";
import NavBarItem from "./nav-bar-item";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faInstagramSquare, faTwitter, faFacebook, faInstagram, faStrava } from "@fortawesome/free-brands-svg-icons";


export default function Layout({ children }) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <NavBar>
            <NavBarItem name="HOME" />
            <NavBarItem name="ABOUT" />
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            <FontAwesomeIcon icon={faStrava} size="2x"/>

          </NavBar>
        </div>
      </div>
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>

  );
}
