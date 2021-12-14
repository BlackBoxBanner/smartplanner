import styles from "@styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div>
                <Link href="/">
                    <div className={styles.title}>Smart Study Planner</div>
                </Link>
            </div>
            <div className={styles.RightButton}>
                <ul>
                    <li>
                        <Link href="/user/dashboard" className={styles.link}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/login" className={styles.link}>
                            Login
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
