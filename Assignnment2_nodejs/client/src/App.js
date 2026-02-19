import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("Click a button to see system info");

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://172.16.46.222:5000/${endpoint}`);
      const data = await response.json();
      setResult(Object.values(data)[0]);
    } catch (error) {
      setResult("⚠ Unable to connect to server");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>💻 System Information</h1>

        <div className="button-group">
          <button onClick={() => fetchData("free-memory")}>
            Free Memory
          </button>

          <button onClick={() => fetchData("total-memory")}>
            Total Memory
          </button>

          <button onClick={() => fetchData("cpu-arch")}>
            CPU Architecture
          </button>

          <button onClick={() => fetchData("user-info")}>
            User Info
          </button>
        </div>

        <div className="result-box">
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
