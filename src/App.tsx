import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  return (
    <>
      <StartScreen />
    </>
  );
}

export default App;
