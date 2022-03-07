import Head from "next/head";
import styles from "@styles/user/Profile.module.css";
import { withProtected } from "@src/hook/route";
import DashbordNav2 from "@component/dashbordNav";
import useAuth from "@src/hook/auth";

function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <DashbordNav2 />
      <main className={styles.main}>
        <div className={styles.inContent}>
          <LeftContext />
          <RightContext />
        </div>
      </main>
    </div>
  );
}

export default withProtected(Profile);

function LeftContext() {
  const { user } = useAuth();
  const userURL = user.photoURL;
  return (
    <div className={styles.userInfo}>
      <img className={styles.img1} src={userURL} width="200px" height="200px" />
      <p>Name : {user.displayName}</p>
      <p>Email : {user.email}</p>
      <p>User ID : {user.uid}</p>
    </div>
  );
}

function RightContext() {
  return (
    <div className={styles.RightCotext}>
      <div className={styles.InInfoBtn}>
        <div>
          <button className={styles.BTN}>Edit Profile</button>
          <button className={styles.BTN}>Change Password</button>
          <button className={styles.BTN}>My education background</button>
        </div>
        <div>
          <button className={styles.ResetAccount}>Reset my account</button>
        </div>
      </div>
    </div>
  );
}
