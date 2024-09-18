import React, { useState } from "react";
import styles from "./CreateRequest.module.css";

const CreateRequest = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Для выбранного изображения

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, image, selectedImage });
  };

  const handleImageSelect = (imageSrc, imageIndex) => {
    setSelectedImage(imageIndex); // Устанавливаем выбранный номер изображения
  };

  // Пример изображений
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
          {image ? (
            <img src={image} alt="Preview" className={styles.previewImage} />
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
          {!image && (
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
                value={index + 1} // Присваиваем номер как value
                checked={selectedImage === index + 1}
                onChange={() => handleImageSelect(src, index + 1)}
                style={{ display: "none" }} // Скрываем input
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
