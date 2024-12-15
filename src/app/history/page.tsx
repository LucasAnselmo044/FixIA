'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface Quiz {
  id: number;
  title: string;
  description: string;
  category: {
    name: string;
  };
}

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch("/api/quizzes/answeredQuizzes");
        if (!res.ok) {
          throw new Error("Erro ao buscar quizzes.");
        }
        const data = await res.json();
        setQuizzes(data);
      } catch (err: unknown) {
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <div className="flex flex-col justify-center items-center animate-pulse">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          <p className="mt-4 text-lg font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          <p className="mt-4 text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!quizzes || quizzes.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white text-center px-4">
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl font-bold">:(</span>
          <p className="mt-4 text-xl font-medium">Ops... Não achamos nenhum quiz respondido no seu histórico!</p>
          <p className="mt-2 text-md">Que tal começar agora?</p>
          <div className="mt-6 space-y-4 flex flex-col items-center">
            <button
              onClick={() => router.push('/categories')}
              className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              Ir para as Categorias
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              Voltar para a Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Meus Quizzes Respondidos</h1>
      <ul className="w-full sm:w-3/4 md:w-1/2">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="mb-6 p-6 bg-gray-800 rounded-lg shadow-2xl hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-semibold">{quiz.title}</h2>
            <p className="text-md mt-2 text-gray-400">{quiz.description}</p>
            <p className="mt-4 text-sm text-blue-400">Categoria: {quiz.category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
