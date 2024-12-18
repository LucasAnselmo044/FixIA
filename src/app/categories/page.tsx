'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchCategories } from '../../services/quizApi';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  quizId: number;
}

export default function CategoriasPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 p-8 flex flex-col items-center justify-center text-white"
    >
      {/* Imagem de fundo com transições suaves */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-lg -z-10"
        style={{ backgroundImage: "url('/images/fundo-dashboard.jpg')" }}
      />

      {/* Filtro gradiente sobre o fundo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 -z-10"
      />

      {/* Logo do Quizzma */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="z-10 mb-12"
      >
        <img
          src="/images/logo.png"
          alt="Logo do FixIA"
          width={250}
          height={250}
          className="object-contain"
        />
      </motion.div>

      {/* Título da página */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="text-4xl font-bold mb-8 text-center text-purple-100 z-10"
      >
        Categorias de hoje:
      </motion.h1>

      {/* Descrição */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="text-center text-purple-200 mb-8 max-w-lg z-10"
      >
        <strong>Estamos comprometidos em oferecer conteúdo sempre atualizado!</strong> <br />
        Nossas categorias são revisadas diariamente para garantir a melhor experiência. Explore e participe dos nossos quizzes!
      </motion.p>

      {/* Grid de categorias */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.1,
            },
          },
        }}
        className="flex flex-col items-center w-full max-w-5xl z-10"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => router.push(`/quiz/${category.quizId}`)}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 py-6 px-6 rounded-lg shadow-lg shadow-purple-900 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 mb-6 w-full"
          >
            <span className="text-lg font-semibold text-white">
              {category.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Botão de Voltar */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => router.push('/dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-900 transition-all duration-200 z-10"
      >
        Voltar
      </motion.button>
    </motion.div>
  );
}
