import styles from "@styles/components/DashboradNav2.module.css";
import Link from "next/link";
import {
  MdLogout,
  MdAccountCircle,
  MdSpaceDashboard,
  MdCalendarToday,
  MdList,
  MdTrackChanges,
} from "react-icons/md";

export default function DashbordNav2() {
  return (
    <div className={styles.main}>
      <div className={styles.leftcontent}>Explanner</div>
      <div className={styles.rightcontent}>
        
        {/* <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                //name of icon
              </div>
            </button>
          </Link>
        </li> */}

        <li>
          <Link href="/">
            <button> {/* className={styles.btn} */}
              <div className={styles.icon}>
                <MdSpaceDashboard size="2rem" />
                Dashboard
              </div>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                <MdCalendarToday size="2rem" />
                Calendar
              </div>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                <MdList size="2rem" />
                ToDoList
              </div>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                <MdTrackChanges size="2rem" />
                Tracker
              </div>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                <MdAccountCircle size="2rem" />
                Profile
              </div>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>
              <div className={styles.icon}>
                <MdLogout size="2rem" />
                SignOut
              </div>
            </button>
          </Link>
        </li>
      </div>
    </div>
  );
}
