'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirecionar para a página de login se o usuário não estiver autenticado
  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin"); // Redireciona para a página de login
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="max-w-lg p-6 bg-gray-800 rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl font-semibold mb-6">Perfil</h1>
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
          />
        )}
        <p className="text-xl font-semibold">{session?.user?.name}</p>
        <p className="text-md text-gray-400">{session?.user?.email}</p>
        <div className="mt-6">
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Voltar para o Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
