import styles from "./QuizScreen.module.css";

interface QuizScreenProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  incorrectAnswers: string[];
  selectedAnswer: Object;
  questionIndex: number;
  onAnswerSelect: (questionIndex: number, answer: string) => void;
}

const QuizScreen = (props: QuizScreenProps) => {
  return (
    <>
      <h2>Question</h2>
      <h3>{props.question}</h3>
      <h2>Answers</h2>
      <ul>
        {props.answers.map((answer, index) => (
          <li key={index}>
            <button
              className={props.selectedAnswer === answer ? styles.selected : ""}
              onClick={() => props.onAnswerSelect(props.questionIndex, answer)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuizScreen;
