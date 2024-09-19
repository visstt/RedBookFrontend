import React from "react";
import styles from "./Header.module.css";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className={styles.area}>
        <LinkS to="map" smooth={true}>
          КАРТА
        </LinkS>
        <LinkS to="inf" smooth={true}>
          О НАС
        </LinkS>
        <Link to="/Login">ВХОД</Link>
      </div>
    </header>
  );
}
