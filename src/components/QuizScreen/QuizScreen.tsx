import styles from "./QuizScreen.module.css";

interface QuizScreenProps {
  question: string;
  answers: string[];
  questionNumber: number;
  correctAnswer: string;
  incorrectAnswers: string[];
  selectedAnswer?: Object;
  questionIndex: number;
  onAnswerSelect: (questionIndex: number, answer: string) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Question {props.questionNumber}</h2>
      <h3 className={styles.question}>{props.question}</h3>
      <ul className={styles.answerList}>
        {props.answers.map((answer, index) => (
          <li key={index} className={styles.answerItem}>
            <button
              className={`${styles.answerButton} ${
                props.selectedAnswer === answer ? styles.selected : ""
              }`}
              onClick={() => props.onAnswerSelect(props.questionIndex, answer)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.divider}></div>
    </div>
  );
};

export default QuizScreen;
