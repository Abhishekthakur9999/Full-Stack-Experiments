import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });

  const API_URL = "http://localhost:8080/api/students";

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(form.id),
          name: form.name,
          course: form.course,
        }),
      });

      setForm({ id: "", name: "", course: "" });
      fetchStudents();
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Management System</h1>

      {/* Form */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Add Student</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="number"
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
          />
          <button style={styles.button}>Add Student</button>
        </form>
      </div>

      {/* Student List */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Student List</h2>
        <div style={styles.grid}>
          {students.map((s) => (
            <div key={s.id} style={styles.studentCard}>
              <p style={styles.name}>{s.name}</p>
              <p>ID: {s.id}</p>
              <p>Course: {s.course}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CSS-in-JS Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  subtitle: {
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  studentCard: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  name: {
    fontWeight: "bold",
  },
};