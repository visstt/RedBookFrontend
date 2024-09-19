import React, { useState } from "react";
import styles from "./CreateRequest.module.css";

const CreateRequest = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file); // сохраняем файл для отправки на сервер
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImageFile(file); // сохраняем файл для отправки на сервер
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("header", title);
    formData.append("description", description);
    formData.append("area", selectedImage);

    // Проверка наличия загруженного файла
    if (imageFile) {
      formData.append("photo", imageFile); // отправляем файл как часть формы
    } else {
      console.error("Файл не выбран");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/addApplication", {
        method: "POST",
        body: formData, // отправляем данные как FormData
        // Не добавляем заголовок Content-Type, его установит браузер автоматически
      });

      if (response.ok) {
        // Уведомление об успешной отправке данных
        alert("Данные успешно отправлены");

        // Перенаправление на главную страницу
        window.location.href = "/";
      } else {
        const errorText = await response.text(); // чтение текста ошибки с сервера
        console.error("Ошибка при отправке данных", errorText);
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
    }
  };

  const handleImageSelect = (imageSrc, imageIndex) => {
    setSelectedImage(imageIndex + 1);
  };

  const images = [
    "/public/img/blue.jpg",
    "/public/img/gray.jpg",
    "/public/img/green.jpg",
    "/public/img/orange.jpg",
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div
          className={styles.dropZone}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {imageFile ? (
            <img
              src={URL.createObjectURL(imageFile)} // используем URL для предварительного просмотра
              alt="Preview"
              className={styles.previewImage}
            />
          ) : (
            <p className={styles.prompt}>
              Перетащите сюда изображение или выберите файл
            </p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          {!imageFile && (
            <label htmlFor="fileInput" className={styles.fileLabel}>
              Выбрать файл
            </label>
          )}
        </div>

        <div>
          <label className={styles.label}>
            Название:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
        </div>

        <div>
          <label className={styles.label}>
            Описание:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
        </div>

        <div className={styles.imageGroup}>
          {images.map((src, index) => (
            <label key={index} className={styles.imageCheckbox}>
              <input
                type="radio"
                name="selectedImage"
                value={index + 1}
                checked={selectedImage === index + 1}
                onChange={() => handleImageSelect(src, index)}
                style={{ display: "none" }}
              />
              <img
                src={src}
                alt={`Option ${index + 1}`}
                className={`${styles.checkboxImage} ${
                  selectedImage === index + 1 ? styles.selected : ""
                }`}
              />
            </label>
          ))}
        </div>

        <button type="submit" className={styles.submitButton}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
