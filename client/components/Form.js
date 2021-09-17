import React, { useContext } from "react";
import { StudentsContext } from "../contexts/StudentsContext";
import styles from "../styles/Form.module.css";

export default function Form() {
  const {
    addStudent,
    updateStudent,
    student,
    setStudent,
    editing,
    setEditing,
  } = useContext(StudentsContext);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    editing ? updateStudent(student) : addStudent(student);
    setStudent({});
    setEditing(false);
  };
  return (
    <form onSubmit={handleAddSubmit} className={styles.form_inline}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={student?.firstName || ""}
          placeholder="first name"
          onChange={(e) =>
            setStudent({ ...student, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={student?.lastName || ""}
          placeholder="last name"
          onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={student?.email || ""}
          placeholder="email@domain.com"
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={student?.age || ""}
          placeholder="age"
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade</label>
        <select
          style={{ width: 191 }}
          name="grade"
          value={student?.grade || ""}
          onChange={(e) => setStudent({ ...student, grade: e.target.value })}
        >
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3st">3st</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>
      </div>
      <button type="submit">{editing ? "Edit" : "Add"}</button>
    </form>
  );
}
