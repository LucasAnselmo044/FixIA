'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Question = {
  id: number;
  text: string;
  options: { id: number; text: string; isCorrect?: boolean }[];
};

export default function QuizPage({ params }: { params: { id: string } }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);
  const router = useRouter();
  const quizId = parseInt(params.id);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(`/api/quiz/${quizId}/questions`);

        if (!res.ok) {
          throw new Error('Erro ao buscar as questões');
        }

        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error('Erro ao carregar as questões:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [quizId]);

  function handleAnswer(optionId: number, isCorrect?: boolean) {
    setSelectedOption(optionId);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setFeedbackMessage('Parabéns, resposta correta!');
    } else {
      setFeedbackMessage('Resposta incorreta! A resposta correta é:');
      setShowCorrectAnswer(
        questions[currentQuestion].options.find((option) => option.isCorrect)?.text || ''
      );
    }
  }

  function handleNextQuestion() {
    if (selectedOption === null) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setFeedbackMessage('');
      setShowCorrectAnswer(null);
    } else {
      setQuizFinished(true);
      saveResult();
    }
  }

  async function saveResult() {
    try {
      const score = (correctAnswers / questions.length) * 100;

      const response = await fetch('/api/quizzes/completedQuizzes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizId,
          score,
        }),
      });

      if (response.ok) {
        console.log('Resultado salvo com sucesso!');
      } else {
        console.error('Erro ao salvar o resultado');
      }
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  }

  function resetQuiz() {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setSelectedOption(null);
    setFeedbackMessage('');
    setShowCorrectAnswer(null);
    setQuizFinished(false);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black relative">
        <Image
          src="/images/fundo.jpg"
          alt="Fundo FixIA"
          layout="fill"
          className="absolute object-cover opacity-20 blur-lg"
        />
        <motion.div
          className="z-10 text-center flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
        >
          <img
            src="/images/logo.png"
            alt="Logo Quizzma"
            width={200}
            height={200}
            className="animate-pulse"
          />
          <p className="text-white mt-4 text-xl font-semibold">
            Carregando questões... aguarde
          </p>
        </motion.div>
      </div>
    );
  }

  if (questions.length === 0) return <p className="text-center text-white">Sem perguntas disponíveis.</p>;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <Image
        src="/images/fundo.jpg"
        alt="Fundo"
        layout="fill"
        className="absolute object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-black/90 z-0" />
      <div className="relative z-10 max-w-3xl w-full p-6">
        {!quizFinished ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center text-purple-200">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h1>
            <p className="text-xl mb-4 text-center bg-black/50 p-4 rounded-lg shadow-md">
              {questions[currentQuestion].text}
            </p>
            <div className="flex flex-col items-center gap-3 w-full">
              {questions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleAnswer(option.id, option.isCorrect)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 px-4 rounded-lg shadow-md transition-all duration-300 ${
                    selectedOption === option.id
                      ? option.isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                  disabled={selectedOption !== null}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
            {feedbackMessage && (
              <motion.p
                className="mt-6 text-lg font-semibold text-center text-yellow-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {feedbackMessage}
              </motion.p>
            )}
            {showCorrectAnswer && (
              <motion.p
                className="text-lg font-semibold text-center text-green-300 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {showCorrectAnswer}
              </motion.p>
            )}
            <div className="flex flex-col items-center gap-4 mt-6">
              <button
                onClick={handleNextQuestion}
                className="py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-200 disabled:bg-gray-500"
                disabled={selectedOption === null}
              >
                Próxima Pergunta
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="py-1 px-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 text-sm"
              >
                Voltar
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-purple-200">Quiz Finalizado!</h1>
            <p className="text-xl mb-4">
              Você acertou {correctAnswers} de {questions.length} perguntas.
              <br />
              Sua pontuação: <span className="font-bold text-green-400">{((correctAnswers / questions.length) * 100).toFixed(2)}%</span>
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => router.push('/categories')}
                className="py-2 px-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
              >
                Voltar para Categorias
              </button>
              <button
                onClick={resetQuiz}
                className="py-2 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
