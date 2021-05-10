import React from "react";
import * as styles from "./socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className={styles.container}>
      <a href="twitter.com">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.strava.com/clubs/custard-running-club">
        <FontAwesomeIcon icon={faStrava} size="2x" />
      </a>
    </div>
  );
}

export default Socials;
