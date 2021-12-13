import styles from "@styles/components/DashboradNav2.module.css";

export default function DashbordNav2() {
  return (
    <div className={styles.main}>
      <div className={styles.leftcontent}>Explanner</div>
      <div className={styles.rightcontent}>
        <ul className={styles.buttonList}>
          {/* <li></li> */}
          <li>Dashboard</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
