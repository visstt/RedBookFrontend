import React, { useState } from "react";
import styles from "./CreateRequest.module.css";

const CreateRequest = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    console.log({ title, description, image });
  };

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

        <button type="submit" className={styles.submitButton}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
