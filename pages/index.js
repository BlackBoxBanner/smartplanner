import Head from "next/head";
import Navbar from "@component/MainNavbar";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
      <Navbar />
      </main>
    </div>
  );
}
