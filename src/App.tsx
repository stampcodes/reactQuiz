import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import quizData from "./data/quizData/quizData";
import QuizScreen from "./components/QuizScreen/QuizScreen";
import "./App.css";
import FinalScreen from "./components/FinalScreen/FinalScreen";

type SelectedAnswer = {
  [key: number]: string;
};

interface QuizItem {
  id: number;
  answers: string[];
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
}

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer>({});
  const [score, setScore] = useState<null | number>(null);
  const [shuffledQuizData, setShuffledQuizData] = useState<QuizItem[]>([]);

  useEffect(() => {
    if (quizStarted) {
      setShuffledQuizData(shuffleAnswers(quizData.data));
    }
  }, [quizStarted]);

  function shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  function shuffleAnswers(data: QuizItem[]): QuizItem[] {
    return data.map((item) => {
      const allAnswers = shuffleArray([
        ...item.incorrectAnswers,
        item.correctAnswer,
      ]);
      return {
        ...item,
        answers: allAnswers,
      };
    });
  }

  const quizDataElement = shuffledQuizData.map((element, index) => (
    <QuizScreen
      key={element.id}
      questionNumber={index + 1}
      correctAnswer={element.correctAnswer}
      incorrectAnswers={element.incorrectAnswers}
      question={element.question}
      answers={element.answers}
      onAnswerSelect={handleAnswerSelect}
      selectedAnswer={selectedAnswer[index]}
      questionIndex={index}
    />
  ));

  function handleAnswerSelect(questionIndex: number, answer: string) {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  }

  function handleSubmitQuiz() {
    let newScore = 0;
    shuffledQuizData.forEach((answer, index) => {
      if (selectedAnswer[index] === answer.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setQuizEnded(true);
  }

  function handleRetryQuiz() {
    setQuizStarted(false);
    setQuizEnded(false);
    setScore(null);
    setSelectedAnswer({});
  }

  return (
    <div className="app-container">
      {!quizStarted && !quizEnded && (
        <StartScreen setQuizStarted={setQuizStarted} />
      )}
      {quizStarted && !quizEnded && (
        <div className="quiz-container">
          {quizDataElement}
          <button className="submit-button" onClick={handleSubmitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}
      {quizEnded && <FinalScreen score={score!} onRetry={handleRetryQuiz} />}
    </div>
  );
};

export default App;
