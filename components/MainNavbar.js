import styles from "@styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div><a href="/" className={styles.title}>Explanner
          </a></div>
      <div className={styles.RightButton}>
        <ul>
          <li>
            <a href="#" className={styles.link}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
