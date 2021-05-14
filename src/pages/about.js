import React from "react";
import Layout from "../components/layout/layout";

export default function About() {
  return (
    <Layout>
      <h1>About the Custard Running Club!</h1>
      <iframe
        allowtransparency="true"
        frameBorder="0"
        height="454"
        scrolling="no"
        src="https://www.strava.com/clubs/923953/latest-rides/cd7ec1c8f934ad277d14de265c8df6434d6b596f?show_rides=true"
        width="300"
      ></iframe>
    </Layout>
  );
}
