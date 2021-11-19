import styles from "@styles/components/SideNavbar.module.css";
import Link from "next/link";

export default function SideNavbar() {
    return (
      <nav className={styles.container}>
            <ul className={styles.Navul}>
                <li><a href="#" className={styles.title}>Home</a></li>
                <li><a href="#" className={styles.title}>Calendar</a></li>
                <li><a href="#" className={styles.title}>ToDoList</a></li>
                <li><a href="#" className={styles.title}>Tracker</a></li>
          </ul>
      </nav>
    );
  }