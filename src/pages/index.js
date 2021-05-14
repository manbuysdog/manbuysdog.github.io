import React from "react";
import Layout from "../components/layout/layout";
import * as homeStyles from "./index.module.scss";


export default function Home() {
  return (
    <Layout>
      <div className={homeStyles.hero}>
        <h1>Welcome to the Custard Running Club!</h1>
      </div>
      <div className={homeStyles.mission}>
        <p>
          We run when we want to, and do other stuff when we want to do that. We
          do the stuff that we have to do, and then we do some other stuff that
          we don't have to do.
        </p>
      </div>
    </Layout>
  );
}
