interface StartScreenProps {
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartScreen = ({ setQuizStarted }: StartScreenProps) => {
  function startQuiz() {
    setQuizStarted(true);
  }

  return (
    <>
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </>
  );
};

export default StartScreen;
