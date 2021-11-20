import Head from "next/head";
import styles from "@styles/Home.module.css";
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
        </main>
      </div>
    );
  }