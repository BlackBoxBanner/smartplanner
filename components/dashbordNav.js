import styles from "@styles/components/DashboardNav.module.css";

export default function DashbordNav() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>this is the header of the dashboard</div>
      <div className={styles.sitetitle}>Dashboard</div>
    </div>
  );
}
