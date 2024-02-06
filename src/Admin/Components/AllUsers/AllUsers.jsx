import React, { useEffect, useState } from "react";
import styles from "./AllUser.module.css";
import deleteIcon from "../../../../public/images/icons8-delete-30.png";
import editIcon from "../../../../public/images/icons8-edit-50.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../redux/Slices/adminSlice";

const AllUsers = () => {
  const { allusers, loading, status } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>All Users</h1>
      <div className={styles.allusers}>
        <div className={styles.table_headings}>
          <p>Sr. No.</p>
          <p>username</p>
          <p>name</p>

          <p>Edit</p>
          <p>DeleteUser</p>
        </div>
        {allusers?.map((user, i) => (
          <ol key={i} className={styles.user_list}>
            <li>{i + 1}.</li>
            <li>{user.email}</li>
            <li>{user.name}</li>

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

export default AllUsers;
