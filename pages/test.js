import styles from "@styles/test.module.css";
import DashbordNav from "@component/MaimadeTest/dashbordNav";
import SideNav from "@component/MaimadeTest/sideNav";

export default function test() {
    return (
        <div className={styles.main}>
            <DashbordNav />
            <SideNav />
        </div>
    );
}
