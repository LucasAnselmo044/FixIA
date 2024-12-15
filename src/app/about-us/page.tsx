'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 text-white flex flex-col items-center justify-center relative">
      
      {/* Header com Título da Página */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-12 text-center drop-shadow-lg text-blue-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sobre Nós
      </motion.h1>

      {/* Texto descritivo com animações */}
      <motion.div
        className="max-w-2xl text-lg sm:text-xl text-gray-200 space-y-8 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Bem-vindo ao Quizzma, uma plataforma inovadora dedicada a transformar a maneira como as pessoas aprendem sobre a desigualdade de gênero. Nossa missão é criar um espaço onde o conhecimento e a conscientização se encontram, oferecendo quizzes interativos que educam e envolvem nossos usuários de maneira divertida e dinâmica.
        </motion.p>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          No Quizzma, acreditamos que a informação é uma poderosa ferramenta de mudança. Ao explorar os temas relacionados à desigualdade de gênero, proporcionamos uma experiência de aprendizado que não apenas informa, mas também provoca reflexões e discussões necessárias para a construção de uma sociedade mais justa e igualitária.
        </motion.p>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Nossos quizzes são projetados para atender a diversos níveis de conhecimento, permitindo que todos, desde iniciantes até especialistas, possam se engajar e aprender. Com perguntas instigantes e desafiadoras, buscamos estimular a curiosidade e o pensamento crítico dos nossos usuários, tornando o aprendizado uma jornada enriquecedora e divertida.
        </motion.p>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Estamos comprometidos em ser mais do que apenas uma plataforma de jogos. Queremos ser um agente de mudança social, promovendo a discussão sobre a desigualdade de gênero e inspirando ações positivas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Obrigado por escolher o Quizzma. Vamos juntos fazer a diferença!
        </motion.p>
      </motion.div>

      {/* Link "Voltar" estilizado na parte inferior */}
      <Link href="/" passHref>
        <motion.a
          className="my-26 text-blue-200 hover:text-blue-300 text-sm sm:text-base tracking-wide cursor-pointer decoration-dotted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Voltar
        </motion.a>
      </Link>
    </div>
  );
}
