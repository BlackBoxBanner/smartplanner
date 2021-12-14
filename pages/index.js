import Head from "next/head";
import Navbar from "@component/MainNavbar";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import poster from "../public/index/SMART STUDY_PLANNER__POSTER.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.Image}>
            <Image src={poster} />
          </div>
        </div>
      </main>
    </div>
  );
}
