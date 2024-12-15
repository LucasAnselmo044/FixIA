'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <div className="w-64 h-screen bg-purple-800 text-white flex flex-col justify-between p-6 fixed left-0 top-0">
      {/* Foto e Nome do Usuário */}
      <div className="flex flex-col items-center mb-8">
        {/* Foto do usuário */}
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        )}
        {/* Nome do usuário */}
        <p className="text-lg font-semibold">{session?.user?.name || 'Usuário'}</p>
      </div>

      {/* Links de navegação */}
      <div className="flex flex-col gap-4">
        <Link href="/profile" className="text-lg hover:text-gray-300">
          Perfil
        </Link>
      </div>

      {/* Botão de logout */}
      <div className="mt-auto">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full text-lg text-red-600 hover:text-red-400 mt-8"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
