'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function MobileNav() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Ícone do Menu Hambúrguer */}
      <button
        onClick={toggleMenu}
        className="text-white text-3xl py-[0rem] absolute top-0 left-0 z-20 m-0"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Fundo escuro que cobre a página principal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Lateral */}
      <div
        className={`fixed inset-y-0 left-0 w-9/12 bg-purple-900 bg-opacity-90 p-6 transition-transform duration-500 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          {/* Foto do usuário */}
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          )}
          {/* Nome do usuário */}
          <p className="text-lg mt-0 font-semibold text-white">{session?.user?.name || 'Usuário'}</p>
        </div>

        {/* Links de navegação */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/profile"
            className="text-lg text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Perfil
          </Link>
        </div>

        {/* Botão de logout */}
        <div className="mt-auto flex justify-center">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-lg text-red-600 hover:text-red-400 my-10"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
