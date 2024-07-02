import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import QuizData from "./components/QuizData/QuizData";
import QuizScreen from "./components/QuizScreen/QuizScreen";

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const quizDataElement = QuizData.data.map((element, index) => (
    <QuizScreen
      key={element.id}
      correctAnswer={element.correct_answer}
      incorrectAnswers={element.incorrect_answers}
      question={element.question}
      answers={element.answers}
      onAnswerSelect={handleAnswerSelect}
      selectedAnswer={selectedAnswer[index]}
    />
  ));

  function handleAnswerSelect(questionIndex: number, answer: string) {
    setSelectedAnswer((prevState) => ({
      ...prevState,
      [questionIndex]: answer,
    }));
  }

  return (
    <>
      {quizStarted ? (
        quizDataElement
      ) : (
        <StartScreen setQuizStarted={setQuizStarted} />
      )}
    </>
  );
};

export default App;
