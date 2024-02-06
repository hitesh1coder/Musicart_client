import React, { useState } from "react";
import styles from "./imageupload.module.css";

const UploadImage = ({ selectedImages, setSelectedImages, onImageChange }) => {
  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const imagesArray = selectedFiles.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
    event.target.value = "";
  };

  const deleteHandler = (image) => {
    setSelectedImages((prevImages) => prevImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  const uploadImages = () => {
    console.log(selectedImages);
    onImageChange(selectedImages);
  };

  const renderImages = () => {
    return selectedImages.map((image, index) => (
      <div key={image} className={styles.image}>
        <img src={image} height="100" width="100" alt="upload" />
        <button className={styles.dlt_btn} onClick={() => deleteHandler(image)}>
          remove
        </button>
        <p>{index + 1}</p>
      </div>
    ));
  };

  return (
    <section>
      <label className={styles.label}>
        + Add Images
        <br />
        <span>up to 4 images</span>
        <input
          type="file"
          name="images"
          className={styles.input}
          onChange={handleFileSelect}
          multiple
          accept="image/png,image/jpeg,image/webp"
        />
      </label>
      <br />

      <div className={styles.images}>
        {selectedImages && renderImages()}
        {selectedImages.length > 3 &&
          (selectedImages.length === 4 ? (
            <button className={styles.upload_btn} onClick={uploadImages}>
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ) : (
            <p className="error">
              You can't upload more than 4 images! <br />
              <span>
                please delete <b>{selectedImages.length - 4}</b> of them
              </span>
            </p>
          ))}
      </div>
    </section>
  );
};

export default UploadImage;
