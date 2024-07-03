import styles from "./FinalScreen.module.css";

interface FinalScreenProps {
  score: number;
  onRetry: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ score, onRetry }) => {
  const getSkillLevel = (score: number) => {
    if (score <= 3) return "Base";
    if (score <= 7) return "Intermediate";
    if (score <= 9) return "Expert";
    return "Master";
  };

  const skillLevel = getSkillLevel(score);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Final Score</h2>
      <p className={styles.score}>Your score is {score}</p>
      <p className={styles.skill}>Skill Level: {skillLevel}</p>
      <button className={styles.retryButton} onClick={onRetry}>
        Retry Quiz
      </button>
    </div>
  );
};

export default FinalScreen;
