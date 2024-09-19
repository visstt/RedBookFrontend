import React from "react";
import styles from "./MapPage.module.css";

export default function MapPage() {
  return (
    <div className={styles.container} id="map">
      <div className={styles.Text}>
        <h1 className={styles.h1}>КАРТА</h1>
      </div>
      <hr className={styles.line} />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d718c5279b2937d65183a496edd70799eb1806f766a1e9e490d088caa0b1ec8&amp;source=constructor"
        width="80%"
        height="580px"
        frameborder="0"
        className={styles.map}
      ></iframe>
    </div>
  );
}
