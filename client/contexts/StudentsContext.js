import { createContext, useState } from "react";
import axios from "axios";

const StudentsContext = createContext();

const apiUrl = process.env.API_URL || "http://localhost:8080";

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null);
  const [editing, setEditing] = useState(false);

  const refreshStudents = async () => {
    setEditing(false);
    axios
      .get(`${apiUrl}/students`)
      .then((result) => setStudents(result.data))
      .catch((err) => console.error(err));
  };

  const addStudent = async (student) => {
    axios({
      method: "POST",
      url: `${apiUrl}/students`,
      data: student,
    })
      .then((result) =>
        setStudents((prevStudents) => {
          const updatedStudents = [result.data, ...prevStudents];
          return updatedStudents;
        })
      )
      .catch((err) => console.error(err));
  };

  const updateStudent = async (student) => {
    console.log(student.id);
    axios({
      method: "PUT",
      url: `${apiUrl}/students/${student.id}`,
      data: student,
    })
      .then(() => refreshStudents())
      .catch((err) => console.error(err));
  };

  const deleteStudent = async (id) => {
    axios
      .delete(`${apiUrl}/students/${id}`)
      .then(() =>
        setStudents((prevStudents) => {
          return prevStudents.filter((student) => student.id !== id);
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
        student,
        setStudent,
        editing,
        setEditing,
        refreshStudents,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export { StudentsProvider, StudentsContext };
