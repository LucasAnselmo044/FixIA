"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/signin');
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-purple-900 via-indigo-950 to-black flex justify-center items-center relative">
      {/* Fundo com tema de programação */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/blackboard-code-bg.jpg')" }}
      ></div>

      <div className="text-center p-10 bg-opacity-80 bg-black rounded-xl shadow-2xl max-w-4xl mx-auto animate-fadeIn z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-slideInUp">
          Bem-vindo ao FixIA!
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-slideInUp delay-200">
          FixIA é um site de perguntas rápidas sobre programação, projetado para desafiar suas habilidades e expandir seus conhecimentos. E não paramos por aqui: grandes novidades estão por vir!
        </p>

        <div className="relative mx-auto my-8">
          <div className="w-56 h-56 mx-auto flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Logo do FixIA"
              width={224} // 56 * 4 (Tailwind rem scale)
              height={224}
              className="rounded-full"
            />
          </div>
        </div>

        <p className="mt-4 text-lg md:text-xl text-gray-300 mb-6">
          Prepare-se para embarcar em uma jornada de aprendizado e desafios emocionantes. Queremos que você atinja o próximo nível na sua carreira de programação!
        </p>

        <button
          onClick={handleStartClick}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-lg rounded-md shadow-md transform hover:scale-105 transition-transform"
        >
          Começar
        </button>
      </div>
    </div>
  );
}
