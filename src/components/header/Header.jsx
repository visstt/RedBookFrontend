import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header>
      <div className={styles.area}>
        <Link to="" smooth={true}>
          КАРТА
        </Link>
        <Link to="" smooth={true}>
          О НАС
        </Link>
        <a href="">ВХОД</a>
      </div>
    </header>
  );
}
