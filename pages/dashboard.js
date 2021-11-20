import Head from "next/head";
import styles from "@styles/Dashboard.module.css";
import Profilebar from "@component/Profilebar";
import SideNavbar from "@component/SideNavbar";

export default function Dashboard() {
    return (
      <div>
        <Head>
          <title>Dashboard</title>
        </Head>
        <main className={styles.main}>
            <Profilebar/>
            <SideNavbar/>
            <div className={styles.gridcontainer}>
                <div className={styles.todonext}>
                    <h1>THIS IS THE todonext container</h1>
                </div>
                <div className={styles.comingupevent}>
                    <h1>THIS IS THE todonext container</h1>
                </div>
                
                
            </div>
        </main>
      </div>
    );
  }