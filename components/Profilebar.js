import styles from "@styles/components/Profilebar.module.css";
import profileImg from "../public/profileimg.jpeg";
import Image from 'next/image'

export default function Profilebar() {
  return (
    <nav className={styles.container}>
        <div className={styles.profileImg}><Image src={profileImg} alt="Profile image"></Image></div>
        
    </nav>
  );
}