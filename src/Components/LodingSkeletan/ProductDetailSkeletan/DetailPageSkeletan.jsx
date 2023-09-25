import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./DetailPage.module.css";
const DetailPageSkeletan = () => {
  return (
    <div className={styles.container}>
      <SkeletonTheme baseColor="#e7e1e1" highlightColor="#cccccc">
        <Skeleton height={25} />
        <div className={styles.product_container}>
          <div className={styles.image_div}>
            <Skeleton height={350} width={400} />
            <div
              style={{ display: "flex", gap: " 0.6rem", marginTop: "0.5rem" }}
            >
              <Skeleton height={100} width={100} />
              <Skeleton height={100} width={100} />
              <Skeleton height={100} width={100} />
            </div>
          </div>
          <div className={styles.details_div}>
            <Skeleton height={50} width={180} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <br />
            <Skeleton height={35} width={150} />
            <Skeleton height={35} width={150} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DetailPageSkeletan;
