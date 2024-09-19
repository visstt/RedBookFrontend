import React from "react";
import styles from "./AreaPage.module.css";
import { Link } from "react-router-dom";

export default function AreaPage() {
  return (
    <div className={styles.area}>
      <h1 className={styles.h1}>Список АРЕАЛОВ</h1>
      <hr className={styles.line} />
      <div className={styles.container}>
        <Link to="/Area1">
          <div className={styles.areaBlock1}>
            <h2 className={styles.areaName}>Ареал 1</h2>
          </div>
        </Link>
        <Link to="/Area2">
          <div className={styles.areaBlock2}>
            <h2 className={styles.areaName}>Ареал 2</h2>
          </div>
        </Link>
        <Link to="/Area3">
          <div className={styles.areaBlock3}>
            <h2 className={styles.areaName}>Ареал 3</h2>
          </div>
        </Link>
        <Link to="/Area4">
          <div className={styles.areaBlock4}>
            <h2 className={styles.areaName}>Ареал 4</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
