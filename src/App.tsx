import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const { data } = await axios("https://api.adviceslip.com/advice");
      setAdvice(data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        <button className="button" onClick={fetchAdvice}>
          GIVE ME ADVICE!
        </button>
      </div>
    </div>
  );
}

export default App;
