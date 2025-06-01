import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center">
      <Profile />
      <Projects />
    </div>
    </>
  );
}

export default App;
