import React, { useState } from "react";
import styles from "./Products.module.css";
import deleteIcon from "/images/icons8-delete-30.png";
import editIcon from "/images/icons8-edit-50.png";
import AddProductModel from "../AddProductModel/AddProductModel";

const Products = () => {
  const userData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [addProductModel, setAddProductModel] = useState(false);

  const closeAddProductModel = () => setAddProductModel(false);
  return (
    <div className={styles.container}>
      {addProductModel && (
        <AddProductModel closeAddProductModel={closeAddProductModel} />
      )}
      <h1>All Products</h1>
      <div className={styles.Products}>
        <div className={styles.header}>
          <button
            className={styles.add_btn}
            onClick={() => setAddProductModel(true)}
          >
            Add New Product
          </button>
          <div className={styles.table_headings}>
            <p>Sr. No.</p>
            <p>name</p>
            <p>CampanyName</p>
            <p>Price</p>
            <p>stock</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
        {userData?.map((user, i) => (
          <ol key={i} className={styles.user_list}>
            <li>{i + 1}.</li>
            <li>boat 450</li>
            <li>Boat</li>
            <li>1299</li>
            <li>432</li>
            <li>
              <img src={editIcon} alt="edit" />
            </li>
            <li>
              <img src={deleteIcon} alt="delete" />
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Products;
