'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '../components/button';
import NavBar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DashBoard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [status, router]);

  if (status === 'loading' || loading) {
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
               Carregando... Por favor, aguarde.
             </p>
           </motion.div>
         </div>
    );
  }

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Bom Dia';
    } else if (hours < 18) {
      return 'Boa Tarde';
    } else {
      return 'Boa Noite';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-black to-gray-900"
    >
      {/* Navigation */}
      <header className="w-full px-6 py-4 flex justify-between items-center z-20">
        <div className="hidden xl:block">
          <NavBar />
        </div>
        <div className="xl:hidden text-white text-3xl p-4">
          <MobileNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 sm:p-10 relative z-10">
        {/* Greeting */}
        {session?.user?.name && (
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-white text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight"
          >
            {`${getGreeting()}, ${session.user.name}!`}
          </motion.h1>
        )}

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Teste seus conhecimentos com questões incríveis e desafie-se com tópicos de tecnologia e programação!
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            className="w-64 sm:w-48 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => router.push('/categories')}
          >
            Escolher Categoria
          </Button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-sm text-gray-400 bg-gray-900 bg-opacity-30">
        <p>
          © {new Date().getFullYear()} FixIA. Todos os direitos reservados.
        </p>
      </footer>
    </motion.div>
  );
}
