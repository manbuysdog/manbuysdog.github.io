import React from "react";
import Layout from "../components/layout/layout";
import * as homeStyles from "./index.module.scss";


export default function Home() {
  return (
    <Layout>
      <div className={homeStyles.hero}>
        <h1>Welcome to the Custard Running Club!</h1>
      </div>
    </Layout>
  );
}
