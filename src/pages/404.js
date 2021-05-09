import React from "react";
import * as styles from "./404.module.css";

export default function NotFound() {
  return (
    <div className={styles.content}>
      <div>
        <img src="/Artboard 1.png" />
      </div>
      <h1 style={{ color: "yellow" }}>COLD CUSTARD!</h1>
      <p>Page not found</p>
    </div>
  );
}
