import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import QuizData from "./data/QuizData/QuizData";
import QuizScreen from "./components/QuizScreen/QuizScreen";
import "./App.css";

type SelectedAnswer = {
  [key: number]: string;
};

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer>({});
  const [score, setScore] = useState<null | number>(null);
  const [shuffledQuizData, setShuffledQuizData] = useState<
    typeof QuizData.data
  >([]);

  useEffect(() => {
    if (quizStarted) {
      setShuffledQuizData(shuffleAnswers(QuizData.data));
    }
  }, [quizStarted]);

  function shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  function shuffleAnswers(data: typeof QuizData.data) {
    return data.map((item) => {
      const allAnswers = shuffleArray([
        ...item.incorrect_answers,
        item.correct_answer,
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
      correctAnswer={element.correct_answer}
      incorrectAnswers={element.incorrect_answers}
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
      if (selectedAnswer[index] === answer.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  }

  function handleRetryQuiz() {
    setQuizStarted(false);
    setScore(null);
    setSelectedAnswer({});
  }

  return (
    <>
      <div className="app-container">
        {quizStarted ? (
          <div className="quiz-container">
            {quizDataElement}
            <button className="submit-button" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
            {score !== null && <h2 className="score">Your score is {score}</h2>}
            {score !== null && (
              <button className="retry-button" onClick={handleRetryQuiz}>
                Retry Quiz!
              </button>
            )}
          </div>
        ) : (
          <StartScreen setQuizStarted={setQuizStarted} />
        )}
      </div>
    </>
  );
};

export default App;
