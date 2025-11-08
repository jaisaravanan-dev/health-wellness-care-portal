import React, { useState, useEffect } from "react";
import Sidebar from "../../component/sideBar";

const GoalTracker = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("patientGoals");
    return saved ? JSON.parse(saved) : [];
  });

  const [goalText, setGoalText] = useState("");

  useEffect(() => {
    localStorage.setItem("patientGoals", JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = () => {
    if (!goalText.trim()) return alert("Please enter a goal.");
    const newGoal = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      text: goalText,
      completed: false,
    };
    setGoals([newGoal, ...goals]);
    setGoalText("");
  };

  const handleToggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={styles.container}>
          <div style={styles.inputSection}>
            <input
              type="text"
              placeholder="Enter your daily goal"
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleAddGoal} style={styles.button}>
              Add Goal
            </button>
          </div>

          <ul style={styles.list}>
            {goals.map((goal) => (
              <li key={goal.id} style={styles.listItem}>
                <div>
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => handleToggleComplete(goal.id)}
                  />
                  <span
                    style={{
                      textDecoration: goal.completed ? "line-through" : "none",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {goal.text} <small>({goal.date})</small>
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// --- Inline styles ---
const styles = {
  container: {
    maxWidth: 600,
    margin: "2rem auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputSection: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: { padding: "10px", fontSize: "1rem", width: "70%" },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    background: "#f2f2f2",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GoalTracker;
