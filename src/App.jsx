
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");

  function addStudent() {
    if (name && roll && marks !== "" && marks >= 0 && marks <= 100) {
      setStudents([
        ...students,
        { name, roll, marks: Number(marks) }
      ]);

      setName("");
      setRoll("");
      setMarks("");
    }
  }

  function deleteStudent(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Student Management System</h1>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        placeholder="Marks"
        type="number"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student Details</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Marks</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.marks}</td>

              <td>
                {student.marks >= 40 ? "PASS" : "FAIL"}
              </td>

              <td>
                <button onClick={() => deleteStudent(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
