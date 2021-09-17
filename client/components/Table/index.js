import { useContext } from "react";
import Cell from "./cell";
import styles from "../../styles/Table.module.css";
import { StudentsContext } from "../../contexts/StudentsContext";

export default function Table() {
  const { students } = useContext(StudentsContext);
  return (
    <table className={styles.main}>
      <thead className={styles.headers}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={styles.cells}>
        {students &&
          students.map((student) => (
            <Cell student={student} key={student.id} />
          ))}
      </tbody>
    </table>
  );
}
