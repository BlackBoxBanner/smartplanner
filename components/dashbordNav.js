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
import { GrClose, GrMenu } from "react-icons/gr";
import useAuth from "@src/hook/auth";
import { useState } from "react";

export default function DashbordNav2() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menu = document.getElementById("rightcontent");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const test = document.getElementById("test");

  if (isOpen) {
    menu.style.display = "flex";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }

  //TODO: clock to retirn original

  return (
    <div className={styles.main}>
      <div className={styles.NavHead}>
        <div className={styles.leftcontent}>Explanner</div>

        {/* hanburger menu */}
        <div className={styles.hamb}>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div id="menuIcon" className={styles.menuIcon}>
              <GrMenu size="1.5rem" />
            </div>
            <div id="closeIcon" className={styles.closeIcon}>
              <GrClose size="1.5rem" />
            </div>
          </button>
        </div>
        {/* hanburger menu */}
      </div>

      <div id="rightcontent" className={styles.rightcontent}>
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
            <button>
              {" "}
              {/* className={styles.btn} */}
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
            <button onClick={logout}>
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
