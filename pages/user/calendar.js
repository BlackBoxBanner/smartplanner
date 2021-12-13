import Head from "next/head";
import styles from "@styles/Dashboard.module.css";
import { withProtected } from "@src/hook/route";
import DashbordNav2 from "@component/dashbordNav";

function Calendar() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
      </Head>
      <DashbordNav2 />
      <main className={styles.main}></main>
    </div>
  );
}

export default withProtected(Calendar);
