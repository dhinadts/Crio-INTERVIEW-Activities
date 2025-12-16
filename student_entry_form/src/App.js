import { useState } from "react";

export default function StudentEntry() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: ""
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addStudent = () => {
    if (!form.name || !form.age || !form.grade) return;

    setStudents([...students, form]);
    setForm({ name: "", age: "", grade: "" });
  };

  const clearForm = () => {
    setForm({ name: "", age: "", grade: "" });
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Title & Subtitle */}
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      {/* Labels */}
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="e.g. MS Dhoni"
        value={form.name}
        onChange={handleChange}
      />

      <label>Age</label>
      <input
        type="number"
        name="age"
        placeholder="e.g. 14"
        value={form.age}
        onChange={handleChange}
      />

      <label>Grade</label>
      <select
        name="grade"
        value={form.grade}
        onChange={handleChange}
      >
        <option value="">Select grade</option>
        <option value="5">Class 5</option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
      </select>

      {/* Buttons */}
      <button onClick={addStudent}>Add Student</button>
      <button onClick={clearForm}>Clear</button>

      {/* Student List / Empty State */}
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
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>Class {student.grade}</td>
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
