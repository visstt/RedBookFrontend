import React from "react";
import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.InfoPage} id="inf">
      <div className={styles.Text}>
        <h1 className={styles.h1}>О НАС</h1>
      </div>
      <hr className={styles.line} />

      <div className={styles.InfSection}>
        <img src="public/img/img.png" alt="123" className={styles.Photo} />
        <h2 className={styles.TextInfo}>
          Расположен на северо-западе и западе столицы и находится в основном на
          незастроенной территории, протянувшейся вдоль берегов Москвы-реки от
          Строгина до Филёвской поймы. Площадь парка — 3660 гектаров, что
          составляет 3,5 % от общей площади города и 23 % от всех московских
          ООПТ. Парк включает в себя 22 экологические зоны, отделенные друг от
          друга реками, заливами, каналами и улицами. 
        </h2>
      </div>
    </div>
  );
}
