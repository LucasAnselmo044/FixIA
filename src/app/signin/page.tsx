"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex justify-center items-center px-5 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full max-w-md"
      >
        {/* Cartão com fundo branco */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white shadow-2xl rounded-3xl w-full p-8 space-y-6 flex flex-col items-center"
        >
          {/* Logo dentro do cartão */}
          <div className="mb-4">
            <img
              src="/images/logo.png"
              alt="Logo do FixIA"
              width={300}
              height={80}
            />
          </div>

          {/* Título e subtítulo */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-purple-700 mb-4">
              Ficamos felizes em tê-lo aqui!
            </h1>
            <p className="text-purple-900 text-lg">
              Para continuar, por favor, faça seu login abaixo.
            </p>
          </div>

          {/* Botão Login com Google */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            onClick={() => signIn("google")}
          >
            <Image
              src="/images/google-logo.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Fazer login com o Google
          </motion.button>
        </motion.div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="text-gray-300 text-sm text-center mt-6"
        >
          Ao fazer login, você concorda com nossos{" "}
          <span className="underline">Termos de Uso</span> e{" "}
          <span className="underline">Política de Privacidade</span>.
        </motion.p>
      </motion.div>
    </motion.main>
  );
}
