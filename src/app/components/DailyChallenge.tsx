'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export default function DailyChallenge() {
  const [question, setQuestion] = useState<string>(
    "Qual é a porcentagem atual de mulheres que ocupam cargos de liderança em grandes empresas no Brasil, e como essa estatística reflete a questão da igualdade de gênero no mercado de trabalho?"
  );
  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: "20%", isCorrect: false },
    { id: 2, text: "35%", isCorrect: true },
    { id: 3, text: "50%", isCorrect: false },
    { id: 4, text: "60%", isCorrect: false },
  ]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-900');
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); // Contador de acertos futuros

  function handleAnswer(optionId: number, isCorrect: boolean) {
    setSelectedOption(optionId);

    if (isCorrect) {
      setFeedbackMessage('Parabéns, resposta correta!');
      setBackgroundColor('bg-green-700');
      setShowCorrectAnswer(null);
      setCorrectAnswerCount(correctAnswerCount + 1); // Incrementa o contador
    } else {
      setFeedbackMessage('Resposta incorreta! A resposta correta é:');
      setShowCorrectAnswer(options.find((option) => option.isCorrect)?.text || '');
      setBackgroundColor('bg-red-700');
    }

    setTimeout(() => setBackgroundColor('bg-blue-900'), 1500);
  }

  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] w-full max-w-md ${backgroundColor} transition-colors duration-700 text-white p-6 rounded-lg shadow-md`}
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Desafio do Dia</h1>
      <p className="text-lg sm:text-xl mb-4 text-center bg-black/50 p-4 rounded-lg shadow-md">{question}</p>
      <div className="flex flex-col items-center gap-3 w-full">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id, option.isCorrect)}
            className={`w-full py-2 px-4 rounded-lg shadow-md transition-all duration-300 ${selectedOption === option.id
              ? option.isCorrect
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            disabled={selectedOption !== null}
          >
            {option.text}
          </button>
        ))}
      </div>
      {feedbackMessage && (
        <p className="mt-6 text-lg font-semibold text-center text-yellow-300">{feedbackMessage}</p>
      )}
      {showCorrectAnswer && (
        <p className="text-lg font-semibold text-center text-green-300 mt-2">
          {showCorrectAnswer}
        </p>
      )}
      {selectedOption !== null && (
        <p className="mt-6 text-lg font-semibold text-center text-green-300">
          {correctAnswerCount} jogadores já acertaram!
        </p>
      )}
    </motion.div>
  );
}
