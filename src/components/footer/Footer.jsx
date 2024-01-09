import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="dk logo" width={50} height={50} />
          <h1 className={styles.logoText}>DK Logo</h1>
        </div>
        <p className={styles.description}>
          This is logo description, This is logo description, This is logo
          description, This is logo description,
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="Tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="Facebook" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Blog
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.link}>
            Style
          </Link>
          <Link href="/" className={styles.link}>
            Fashion
          </Link>
          <Link href="/" className={styles.link}>
            Coding
          </Link>
          <Link href="/" className={styles.link}>
            Travel
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" className={styles.link}>
            Facebook
          </Link>
          <Link href="/" className={styles.link}>
            Instagram
          </Link>
          <Link href="/" className={styles.link}>
            Tiktok
          </Link>
          <Link href="/" className={styles.link}>
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
