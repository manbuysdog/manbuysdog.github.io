import React from "react";
import * as styles from "./404.module.css";
import Layout from "../components/layout";

export default function NotFound() {
  return (
    <Layout>  
      <h1 style={{ color: "yellow" }}>COLD CUSTARD!</h1>
      <p>Page not found</p>
    </Layout>
  );
}
