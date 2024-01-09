import Image from "next/image";
import Link from "next/link";
import styles from "./menuPost.module.css";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>This is a Travel item</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Eden</span>
            <span className={styles.date}> - 10.03.2003</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>This is a Culture item</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Eden</span>
            <span className={styles.date}> - 10.03.2003</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>This is a Food item</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Eden</span>
            <span className={styles.date}> - 10.03.2003</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>This is a Fashion item</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Eden</span>
            <span className={styles.date}> - 10.03.2003</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
