import Link from "next/link";
import MenuPost from "../menuPost/MenuPost";
import styles from "./sideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=cultrue"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
      </div>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default SideMenu;
