import { useState } from "react";

export default function StudentEntry() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!name || !age || !grade) return;

    setStudents([...students, { name, age, grade }]);
    setName("");
    setAge("");
    setGrade("");
  };

  const clearForm = () => {
    setName("");
    setAge("");
    setGrade("");
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Title */}
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      {/* Labels MUST be visible */}
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="e.g. MS Dhoni"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Age</label>
      <input
        type="number"
        name="age"
        placeholder="e.g. 14"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label>Grade</label>
      <select
        name="grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option value="">Select grade</option>
        <option value="5">Class 5</option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
      </select>

      <button onClick={addStudent}>Add Student</button>
      <button onClick={clearForm}>Clear</button>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>Class {s.grade}</td>
                <td>
                  <button onClick={() => removeStudent(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
