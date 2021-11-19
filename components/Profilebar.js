import styles from "@styles/components/Profilebar.module.css";
import profileImg from "../public/profileimg.jpeg";
import Image from 'next/image'

export default function Profilebar() {
  return (
    <nav className={styles.container}>
        <div className={styles.profileImg}><Image src={profileImg} alt="Profile image"></Image></div>
        <div className={styles.profileNameContainer}>
            <h1 className={styles.profileName}>Welcome back, Johnson Smith</h1>
            <h4 className={styles.profileEmail}>example@gmail.com</h4>
        </div>
    </nav>
  );
}

