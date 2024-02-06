import React, { useState } from "react";
import styles from "./AddProductModel.module.css";
import UploadeImage from "./UploadImage";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/Slices/adminSlice";

const AddProductModel = ({ closeAddProductModel }) => {
  const [formValue, setFormValue] = useState({
    title: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
    type: "",
    color: "",
    images: [],
    detail1: "",
    detail2: "",
    detail3: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onImageChange = (images) => {
    if (selectedImages.length === 4) {
      setFormValue({ ...formValue, images: [...images] });
    }
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    if (
      formValue.title === "" ||
      formValue.brand === "" ||
      formValue.description === "" ||
      formValue.price === "" ||
      formValue.stock === "" ||
      formValue.type === "" ||
      formValue.color === "" ||
      formValue.images.length < 4
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      await dispatch(addNewProduct(formValue));

      // const res = await dispatch(
      //   uploadImage({ id: uploadResult._id, image: image.name })
      // ).unwrap();
      // console.log(res);
    }
  };

  return (
    <>
      <div
        className={styles.product_model_wrapper}
        onClick={closeAddProductModel}
      ></div>

      <div className={styles.product_model}>
        <div className={styles.addproduct_form}>
          <h1>Add Your Product</h1>
          <div className={styles.input_box}>
            <label htmlFor="">Product Name :</label>
            <input
              className={styles.input}
              type="text"
              name="title"
              placeholder="ProductName"
              onChange={handleChange}
              value={formValue.title}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Brand :</label>
            <input
              className={styles.input}
              type="text"
              name="brand"
              placeholder="Category"
              onChange={handleChange}
              value={formValue.brand}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Description :</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Product Description"
              name="description"
              onChange={handleChange}
              value={formValue.description}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Price :</label>
            <input
              className={styles.input}
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              value={formValue.price}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Stock :</label>
            <input
              className={styles.input}
              type="number"
              name="stock"
              placeholder="Add Stock"
              onChange={handleChange}
              value={formValue.stock}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Type :</label>
            <input
              className={styles.input}
              type="text"
              name="type"
              placeholder="Add Type"
              onChange={handleChange}
              value={formValue.type}
            />
          </div>
          <div className={styles.input_box}>
            <label htmlFor="">Color :</label>
            <input
              className={styles.input}
              type="text"
              name="color"
              placeholder="Color"
              onChange={handleChange}
              value={formValue.color}
            />
          </div>
          <div className={styles.input_imgs}>
            {/* <label htmlFor="">ImagesLink :</label>
            <div style={{ display: "flex" }}>
              <input
                className={styles.input}
                type="file"
                name="image1"
                placeholder="image1"
                onChange={handleImage}
              />
              <input
                className={styles.input}
                type="file"
                name="image2"
                placeholder="image2"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                className={styles.input}
                type="file"
                name="image3"
                placeholder="image3"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div> */}
            <UploadeImage
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              onImageChange={onImageChange}
            />
          </div>
          <div className={styles.input_imgs}>
            <label htmlFor="">Details :</label>
            <div style={{ display: "flex" }}>
              <input
                className={styles.input}
                type="text"
                name="detail1"
                placeholder="detail1"
                value={formValue.detail1}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                type="text"
                name="detail2"
                placeholder="detail2"
                value={formValue.detail2}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                type="text"
                name="detail3"
                placeholder="detail3"
                value={formValue.detail3}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className={styles.error}>
            {error ? "* all fields required in the form" : ""}
          </p>
          <button
            className={styles.addproduct_model_btn}
            onClick={handleAddProduct}
          >
            +Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProductModel;
