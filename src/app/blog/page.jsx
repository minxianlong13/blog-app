import CardList from "@/components/cardList/CardList";
import SideMenu from "@/components/sideMenu/SideMenu";
import styles from "./blogPage.module.css";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <SideMenu />
      </div>
    </div>
  );
}
