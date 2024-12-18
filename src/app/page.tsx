"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/signin");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-screen w-full bg-gradient-to-r from-purple-900 via-indigo-950 to-black flex justify-center items-center relative overflow-hidden"
    >
      {/* Fundo com código e opacidade aprimorada */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/blackboard-code-bg.jpg')" }}
      ></div>

      {/* Camada de gradiente para efeito de profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative z-20 text-center p-8 max-w-4xl mx-auto"
      >
        {/* Logo destacada */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/logo.png"
            alt="Logo do FixIA"
            width={320} // Aumentei a largura para maior impacto visual
            height={160}
            className="object-contain"
          />
        </div>

        {/* Título e descrição */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6"
        >
          Bem-vindo ao <span className="text-purple-500">FixIA</span>!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
        >
          FixIA é um site interativo de quizzes sobre programação, projetado
          para desafiar suas habilidades e impulsionar sua carreira no mundo da
          tecnologia. Prepare-se para uma experiência inovadora!
        </motion.p>

        {/* Botão de ação */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          onClick={handleStartClick}
          className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all ease-in-out duration-200"
        >
          Começar Agora
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
