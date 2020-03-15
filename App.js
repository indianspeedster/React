import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import { Projects } from "./components/Projects";

function App() {
  const [users, projects] = useState([]);
  const [Pro, project] = useState([]);
  useEffect(() => {
    fetch(
      "/getjson/http://www.json-generator.com/api/json/get/bUdMdNSyPS?indent=2"
    ).then(response =>
      response.json().then(data => {
        projects(data.users);
        project(data.projects);
      })
    );
  }, []);
  console.log(Pro[0]);

  return (
    <div>
      <div className="App">
        <User users={users} />
      </div>
      <div className="App2">
        <Projects Pro={Pro} />
      </div>
    </div>
  );
}

export default App;
