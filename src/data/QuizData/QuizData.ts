interface QuizItem {
  id: number;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

interface QuizData {
  data: QuizItem[];
}

const QuizData: QuizData = {
  data: [
    {
      id: 1,
      answers: [
        "Sea level rise",
        "Biodiversity growth",
        "Pollution decrease",
        "Increase in freshwater reserves",
      ],
      correct_answer: "Sea level rise",
      incorrect_answers: [
        "Biodiversity growth",
        "Pollution decrease",
        "Increase in freshwater reserves",
      ],
      question: "Which of the following is a direct effect of global warming?",
    },
    {
      id: 2,
      answers: ["Carbon dioxide", "Nitrogen", "Oxygen", "Argon"],
      correct_answer: "Carbon dioxide",
      incorrect_answers: ["Nitrogen", "Oxygen", "Argon"],
      question:
        "Which gas is primarily responsible for the anthropogenic greenhouse effect?",
    },
    {
      id: 3,
      answers: ["50 years", "100 years", "200 years", "300 years"],
      correct_answer: "100 years",
      incorrect_answers: ["50 years", "200 years", "300 years"],
      question: "How long can carbon dioxide remain in the atmosphere?",
    },
    {
      id: 4,
      answers: [
        "Glacier melting",
        "Increase in marine biodiversity",
        "Reduction of storms",
        "Increase in tropical forests",
      ],
      correct_answer: "Glacier melting",
      incorrect_answers: [
        "Increase in marine biodiversity",
        "Reduction of storms",
        "Increase in tropical forests",
      ],
      question:
        "Which phenomenon is caused by global warming and contributes to sea level rise?",
    },
    {
      id: 5,
      answers: ["Particulate matter", "Radon", "Oxygen", "Methane"],
      correct_answer: "Particulate matter",
      incorrect_answers: ["Radon", "Oxygen", "Methane"],
      question:
        "Which of the following air pollutants can cause respiratory and cardiac problems?",
    },
    {
      id: 6,
      answers: [
        "Deforestation",
        "Afforestation",
        "Agroforestry",
        "Reforestation",
      ],
      correct_answer: "Deforestation",
      incorrect_answers: ["Afforestation", "Agroforestry", "Reforestation"],
      question:
        "What term describes the massive removal of trees to make space for other activities?",
    },
    {
      id: 7,
      answers: ["Mitigation", "Adaptation", "Resilience", "Pollution"],
      correct_answer: "Pollution",
      incorrect_answers: ["Mitigation", "Adaptation", "Resilience"],
      question:
        "Which of these terms is not a strategy to address climate change?",
    },
    {
      id: 8,
      answers: [
        "Renewable energy",
        "Fossil fuels",
        "Nuclear energy",
        "Bioenergy",
      ],
      correct_answer: "Fossil fuels",
      incorrect_answers: ["Renewable energy", "Nuclear energy", "Bioenergy"],
      question:
        "Which energy source is considered one of the main causes of increased greenhouse gases?",
    },
    {
      id: 9,
      answers: [
        "Reduce, Reuse, Recycle",
        "Reduce, Reorder, Recycle",
        "Save, Reuse, Reduce",
        "Save, Reorder, Reduce",
      ],
      correct_answer: "Reduce, Reuse, Recycle",
      incorrect_answers: [
        "Reduce, Reorder, Recycle",
        "Save, Reuse, Reduce",
        "Save, Reorder, Reduce",
      ],
      question:
        "What is the motto of the three Rs for a sustainable approach to waste?",
    },
    {
      id: 10,
      answers: [
        "Kyoto Protocol",
        "Paris Agreement",
        "Montreal Protocol",
        "Stockholm Agreement",
      ],
      correct_answer: "Paris Agreement",
      incorrect_answers: [
        "Kyoto Protocol",
        "Montreal Protocol",
        "Stockholm Agreement",
      ],
      question:
        "Which international agreement focuses specifically on reducing greenhouse gas emissions to limit global warming?",
    },
  ],
};

export default QuizData;
