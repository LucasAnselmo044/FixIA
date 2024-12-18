"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/signin");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-purple-900 via-indigo-950 to-black flex justify-center items-center relative overflow-hidden">
      {/* Fundo com código e opacidade aprimorada */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/blackboard-code-bg.jpg')" }}
      ></div>

      {/* Camada de gradiente para efeito de profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

      {/* Conteúdo principal */}
      <div className="relative z-20 text-center p-8 max-w-4xl mx-auto">
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Bem-vindo ao <span className="text-purple-500">FixIA</span>!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
          FixIA é um site interativo de quizzes sobre programação, projetado
          para desafiar suas habilidades e impulsionar sua carreira no mundo da
          tecnologia. Prepare-se para uma experiência inovadora!
        </p>

        {/* Botão de ação */}
        <button
          onClick={handleStartClick}
          className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all ease-in-out duration-200"
        >
          Começar Agora
        </button>
      </div>
    </div>
  );
}
