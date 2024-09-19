import React, { useState, useEffect } from "react";
import styles from "./Area1.module.css";

export default function Area1() {
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/getArea-1", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setAnimalData(data);
        } else {
          console.error("Ошибка при загрузке данных:", response.statusText);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Животные первого ареала</h1>
      <div className={styles.cardContainer}>
        {animalData.length > 0 ? (
          animalData.map((animal) => (
            <div key={animal.id} className={styles.card}>
              <img
                src={`data:image/jpeg;base64,${animal.photo}`}
                alt={animal.header}
                className={styles.photo}
              />
              <h2>{animal.header}</h2>
              <p>{animal.description}</p>
            </div>
          ))
        ) : (
          <p>Нет доступных данных для отображения.</p>
        )}
      </div>
    </div>
  );
}
