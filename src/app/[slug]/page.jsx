import Comments from "@/components/comments/Comments";
import SideMenu from "@/components/sideMenu/SideMenu";
import Image from "next/image";
import styles from "./singlePage.module.css";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>This is the post title</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="user image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Xianlong Min</span>
              <span className={styles.date}>2014.01.01</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt="post image"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              This is post description, This is post description,This is post
              description, This is post description, This is post description,
              This is post description, This is post description, This is post
              description,
            </p>
            <h2>This is the subtitle</h2>
            <p>
              This is post description, This is post description,This is post
              description, This is post description, This is post description,
              This is post description, This is post description, This is post
              description,
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
