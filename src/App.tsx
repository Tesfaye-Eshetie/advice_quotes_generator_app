import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import { fetchAdvice } from "./features/advice/adviceSlice";
import "./App.css";

function App() {
  const { advice } = useAppSelector((state) => state.advice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdvice());
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        <button className="button" onClick={() => dispatch(fetchAdvice())}>
          GIVE ME ADVICE!
        </button>
      </div>
    </div>
  );
}

export default App;
