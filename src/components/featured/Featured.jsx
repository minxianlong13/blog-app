import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Xianlong is here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is the post title</h1>
          <p className={styles.postDescription}>
            This is the post description, This is the post description,This is
            the post description,This is the post description,This is the post
            description,This is the post description,This is the post
            description,This is the post description,
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
