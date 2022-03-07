import styles from "@styles/components/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.logo}>StudyPlanner</h1>
      </div>
      <div className={styles.dot}>
        <span className={styles.dot1} />
        <span className={styles.dot2} />
        <span className={styles.dot3} />
      </div>
    </div>
  );
}
