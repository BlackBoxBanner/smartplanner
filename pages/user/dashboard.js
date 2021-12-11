import Head from "next/head";
import styles from "@styles/Dashboard.module.css";
import DashbordNav from "@component/dashbordNav";
import SideNav from "@component/SideNav";
import { withProtected } from "@src/hook/route";

function Dashboard() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <SideNav />
            <main className={styles.main}>
                <DashbordNav />
            </main>
        </div>
    );
}

export default withProtected(Dashboard);
