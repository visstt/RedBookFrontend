import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Applications/Applications.module.css";

export default function Applications() {
  const [animalData, setAnimalData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/getAllApplications",
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Полученные данные:", data);
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

  const handleSubmit = async (event, id) => {
    event.preventDefault();

    const selectedApproval = document.querySelector(
      `input[name="approval-${id}"]:checked`
    );

    if (!selectedApproval) {
      alert("Пожалуйста, выберите галочку или крестик.");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("approval", selectedApproval.value);

    try {
      const response = await fetch(
        "http://localhost:8080/processingApplication",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Данные успешно отправлены");

        // Перезагрузка страницы для обновления данных
        window.location.reload();
      } else {
        const errorText = await response.text();
        console.error("Ошибка при отправке данных", errorText);
      }
    } catch (error) {
      console.error("Ошибка сети", error);
    }
  };

  return (
    <div className={styles.Applications}>
      <h1 className={styles.h1}>ЗАЯВКИ НА ДОБАВЛЕНИЕ</h1>
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
              <p>Кадастровый номер: {animal.cadastral}</p>

              <form
                onSubmit={(event) => handleSubmit(event, animal.id)}
                className={styles.checkboxForm}
              >
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="radio"
                      name={`approval-${animal.id}`}
                      value="true"
                      required
                    />
                    <span className={styles.greenCheckmark}>✔️</span>
                  </label>

                  <label className={styles.checkboxLabel}>
                    <input
                      type="radio"
                      name={`approval-${animal.id}`}
                      value="delete"
                      required
                    />
                    <span className={styles.redCross}>❌</span>
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Отправить выбор
                </button>
              </form>
            </div>
          ))
        ) : (
          <p>Нет доступных данных для отображения.</p>
        )}
      </div>
    </div>
  );
}
