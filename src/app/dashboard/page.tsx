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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-950 to-black">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-80" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center z-10"
        >
          <Image
            src="/images/logo.png"
            alt="FixIA Logo"
            width={250}
            height={250}
          />
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-950 to-black"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-90" />

      <div className="xl:block hidden z-20">
        <NavBar />
      </div>

      <div className="xl:hidden text-white text-3xl p-4 absolute top-4 left-4 z-30">
        <MobileNav />
      </div>

      <main className="text-center p-6 sm:p-10 relative z-10">
        {session?.user?.name && (
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-white text-4xl font-extrabold mb-4"
          >
            {`${getGreeting()}, ${session.user.name}!`}
          </motion.h1>
        )}

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-gray-300 text-lg font-light max-w-lg mx-auto mb-8"
        >
          Teste seus conhecimentos de programação com questões desafiadoras sobre tecnologia e programação!
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="space-y-4">
            <Button
              className="w-64 bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => router.push('/categories')}
            >
              Escolher Categoria
            </Button>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
