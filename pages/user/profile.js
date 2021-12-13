import Head from "next/head";
import styles from "@styles/user/Profile.module.css";
import { withProtected } from "@src/hook/route";
import DashbordNav2 from "@component/dashbordNav";
import useAuth from "@src/hook/auth";
import Image from "next/image";

function Profile() {
  const { user } = useAuth();
  const userURL = user.photoURL;
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <DashbordNav2 />
      <main className={styles.main}>
        <div className={styles.inContent}>
          <div className={styles.userInfo}>
            <img
              className={styles.img1}
              src={userURL}
              width="200px"
              height="200px"
            />
            Name : {user.displayName}
            <br />
            Email : {user.email}
            <br />
            User ID : {user.uid}
            <button className={styles.ProfileEditBTN}>Edit Profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default withProtected(Profile);
