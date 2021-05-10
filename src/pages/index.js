import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "yellow" }}>Welcome to the Custard Running Club!</h1>
      <iframe
        allowtransparency
        frameborder="0"
        height="454"
        scrolling="no"
        src="https://www.strava.com/clubs/923953/latest-rides/cd7ec1c8f934ad277d14de265c8df6434d6b596f?show_rides=true"
        width="300"
      ></iframe>
    </Layout>
  );
}
