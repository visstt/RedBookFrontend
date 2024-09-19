import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // состояние для ошибки

  const handleSubmit = async (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    const payload = {
      login,
      password,
    };
    const formData = new FormData();
    formData.append("login", login);
    formData.append("password", password);
    try {
      const response = await fetch("http://localhost:8080/loginAdmin", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();

        if (result === true) {
          // Если авторизация успешна, перенаправляем на главную страницу
          window.location.href = "/";
        } else {
          // Если авторизация неудачна, показываем ошибку
          setError("Неверный логин или пароль");
        }
      } else {
        // Если сервер вернул ошибку, обрабатываем её
        setError("Ошибка сервера. Попробуйте снова.");
      }
    } catch (error) {
      // Обработка ошибок сети или других проблем
      setError("Ошибка сети. Попробуйте снова.");
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className={styles.page}>
      <img src="public/img/loza.svg" alt="" className={styles.loza} />
      <img src="public/img/leaf.svg" alt="" className={styles.leaf} />
      <h1 className={styles.h1}>ВХОД</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="login">
            Введите логин
          </label>
          <input
            type="text"
            id="login"
            name="login"
            className={styles.textInput}
            value={login}
            onChange={(e) => setLogin(e.target.value)} // обновляем состояние
            required
          />
          <label className={styles.label} htmlFor="password">
            Введите пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.textInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // обновляем состояние
            required
          />
          {error && <p className={styles.error}>{error}</p>}{" "}
          {/* выводим ошибку, если есть */}
          <input type="submit" value="Войти" className={styles.submitBtn} />
        </form>
      </div>
    </div>
  );
}
