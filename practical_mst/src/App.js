import React, { useState, lazy, Suspense } from "react";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Profile = lazy(() => import("./components/Profile"));

function App() {

  const [page, setPage] = useState("");

  return (
    <div className="container">

      <h1>React Lazy Loading Example</h1>

      <button onClick={() => setPage("dashboard")}>
        Open Dashboard
      </button>

      <button onClick={() => setPage("profile")}>
        Open Profile
      </button>

      <Suspense fallback={<h2>Loading Component...</h2>}>

        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}

      </Suspense>

    </div>
  );
}

export default App;