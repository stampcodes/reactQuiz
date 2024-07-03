import styles from "./StartScreen.module.css";

interface StartScreenProps {
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartScreen: React.FC<StartScreenProps> = ({ setQuizStarted }) => {
  function startQuiz() {
    setQuizStarted(true);
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Quiz</h1>
        <p className={styles.description}>
          Test your knowledge about the environment and the impact of climate
          change. Click on "Start Quiz" to begin and see how much you know!
        </p>
        <button className={styles.startButton} onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default StartScreen;
