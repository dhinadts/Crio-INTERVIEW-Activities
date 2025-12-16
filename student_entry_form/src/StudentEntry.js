import { useState } from "react";

function StudentEntry() {
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
    <div className="container">
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      <input
        type="text"
        placeholder="e.g. MS Dhoni"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="number"
        placeholder="e.g. 14"
        name="age"
        value={form.age}
        onChange={handleChange}
      />

      <select
        name="grade"
        value={form.grade}
        onChange={handleChange}
      >
        <option value="">Select grade</option>
        <option value="Class 6">Class 6</option>
        <option value="Class 7">Class 7</option>
        <option value="Class 8">Class 8</option>
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
                <td>{s.grade}</td>
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

export default StudentEntry;
