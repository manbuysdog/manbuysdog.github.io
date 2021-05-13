import React from "react";
import * as styles from "./layout.module.css";
import NavBar from "./nav-bar";
import NavBarItem from "./nav-bar-item";
import Socials from "./socials";
import Navigation from "./navigation";


export default function Layout({ children }) {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column"
    }}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <NavBar>
            <Navigation></Navigation>
            <Socials></Socials>
          </NavBar>
        </div>
      </div>
      <main>{children}</main>
      <footer><p>CUSTARD RUNNING CLUB 2021</p></footer>
    </div>
  );
}
