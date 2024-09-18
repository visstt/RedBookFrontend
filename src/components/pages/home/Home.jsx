import React from "react";
import styles from "./Home.module.css";
import Header from "../../header/Header";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <img src="public/img/leaf.svg" alt="" className={styles.leaf} />
          <img src="public/img/eagle.svg" alt="" className={styles.eagle} />
          <img src="public/img/leaves.png" alt="" className={styles.leaves} />
          <img src="public/img/fikus.svg" alt="" className={styles.fikus} />
          <Header></Header>
          <h1>ПИП МОСКВОРЕЦКИЙ</h1>
          <h3>КРАСНАЯ КНИГА</h3>
          <span className={styles.line}></span>
        </div>
      </div>
    </>
  );
}
