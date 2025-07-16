import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Cyber Risk XL</h1>
      <p>A lightweight excel-powered tool for assessing cyber risk.</p>
      <div className="row">
        <button type="submit">Create new risk register</button>
        <button type="submit">Open existing risk register</button>
      </div>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
