import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "Authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "Authenticated" ? (
        <div className={styles.writeArea}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Xianlong Min</span>
              <span className={styles.date}>2014.01.01</span>
            </div>
          </div>
          <p className={styles.description}>
            This is comment description.This is comment description.This is
            comment description. This is comment description. This is comment
            description.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Xianlong Min</span>
              <span className={styles.date}>2014.01.01</span>
            </div>
          </div>
          <p className={styles.description}>
            This is comment description.This is comment description.This is
            comment description. This is comment description. This is comment
            description.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user image"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Xianlong Min</span>
              <span className={styles.date}>2014.01.01</span>
            </div>
          </div>
          <p className={styles.description}>
            This is comment description.This is comment description.This is
            comment description. This is comment description. This is comment
            description.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
