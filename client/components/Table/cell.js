import React, { useContext, useState } from "react";
import { StudentsContext } from "../../contexts/StudentsContext.js";
import styles from "../../styles/Table.module.css";

export default function Student({ student }) {
  const { deleteStudent, setStudent, setEditing } = useContext(StudentsContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (data) => {
    clicked ? setStudent(null) : setStudent(data);
    setEditing(!clicked);
    setClicked(!clicked);
  };

  return (
    <tr key={student.id} onClick={() => handleClick(student)}>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.email}</td>
      <td>{student.age}</td>
      <td>{student.grade}</td>
      <td>
        <button
          className={styles.btnDelete}
          type="button"
          onClick={() => deleteStudent(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
