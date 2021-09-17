import { useEffect, useContext } from "react";
import { StudentsContext } from "../contexts/StudentsContext";
import StudentForm from "../components/Form";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { refreshStudents } = useContext(StudentsContext);
  useEffect(() => {
    refreshStudents();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.card}>
        <h2 className={styles.card_title}>Students CRUD APP</h2>
        <div className={styles.card_form}>
          <StudentForm />
        </div>
        <div className={styles.card_content}>
          <Table />
        </div>
      </div>
    </div>
  );
}
