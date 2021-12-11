import styles from "@styles/components/sideNav.module.css";
import {
    MdLogout,
    MdAccountCircle,
    MdSpaceDashboard,
    MdCalendarToday,
    MdList,
    MdTrackChanges,
} from "react-icons/md";
import useAuth from "@src/hook/auth"

export default function SideNav() {
    const { logout } = useAuth();
    return (
        <div className={styles.main}>
            <div className={styles.information}>
                <button>
                    <MdSpaceDashboard size="2rem" />
                    Dashboard
                </button>
                <button>
                    <MdCalendarToday size="2rem" />
                    Calendar
                </button>
                <button>
                    <MdList size="2rem" />
                    ToDoList
                </button>
                <button>
                    <MdTrackChanges size="2rem" />
                    Tracker
                </button>
            </div>

            <div className={styles.information}>
                <button>
                    <MdAccountCircle size="2rem" />
                    Profile
                </button>
                <button onClick={logout}>
                    <MdLogout size="2rem" />
                    SignOut
                </button>
            </div>
        </div>
    );
}
