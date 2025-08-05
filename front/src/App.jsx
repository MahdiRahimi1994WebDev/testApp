import { useState, useEffect } from "react";
import "./App.css";
import Album from "./components/Album";
import RandomNumber from "./components/RandomNumber";

function App() {
  const [greeting, setGreeting] = useState("");
  const [selectedName, setSelectedName] = useState("Abbas");
  useEffect(() => {
    handleGreeting(selectedName);
  }, [selectedName]);

  const handleGreeting = async () => {
    const result = await fetch("http://localhost:7007/greeting", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: selectedName }),
    });
    const text = await result.text();
    setGreeting(text);
  };
  return (
    <>
      <select onChange={(e) => setSelectedName(e.target.value)}>
        <option value="Ali">Ali</option>
        <option value="Hassan">Hassan</option>
        <option value="Hossein">Hossein</option>
      </select>
      <h2>{greeting}</h2>
      <Album />
      <RandomNumber />
    </>
  );
}

export default App;
