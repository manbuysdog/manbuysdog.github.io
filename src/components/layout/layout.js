import React from "react";
import * as styles from "./layout.module.css";
import NavBar from "./nav-bar";
import Socials from "../socials";
import Navigation from "./navigation";
import Footer from "./footer";


export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header className={styles.container}>
        <div className={styles.banner}>
          <NavBar>
            <Navigation></Navigation>
            <Socials></Socials>
          </NavBar>
        </div>
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
