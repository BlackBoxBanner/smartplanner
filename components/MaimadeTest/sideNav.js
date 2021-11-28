import styles from "@styles/Maimadetest/sideNav.module.css";
import {
    MdLogout,
    MdAccountCircle,
    MdSpaceDashboard,
    MdCalendarToday,
    MdList,
    MdTrackChanges,
} from "react-icons/md";

export default function sideNav() {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <button>
                    <MdSpaceDashboard size="2rem"/>
                    <p>Dashboard</p>
                </button>

                <button>
                    <MdCalendarToday size="2rem"/>
                    <p>Calendar</p>
                </button>

                <button>
                    <MdList size="2rem"/>
                    <p>ToDoList</p>
                </button>

                <button>
                    <MdTrackChanges size="2rem"/>
                    <p>Tracker</p>
                </button>
            </div>

            <div className={styles.bottom}>
                <button>
                    <MdAccountCircle size="2rem"/>
                    <p>Profile</p>
                </button>

                <button>
                    <MdLogout size="2rem"/>
                    <p>SignOut</p>
                </button>
            </div>
        </div>
    );
}
