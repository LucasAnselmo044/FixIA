'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center p-6 bg-gray-100"
    >
      <div className="relative max-w-3xl mx-auto p-8 text-gray-800 bg-white shadow-lg rounded-lg">
        <Link href="/" className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
          <IoArrowBack size={24} />
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center">Termos e Condições do Quizzma</h1>
        
        <p className="mb-4">
          Bem-vindo ao Quizzma, um aplicativo educacional focado em promover a conscientização sobre desigualdade de gênero.
          Ao utilizar o Quizzma, você concorda com os seguintes termos:
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Privacidade e Coleta de Dados</h2>
        <p className="mb-4">
          Nós valorizamos sua privacidade. Ao se cadastrar no Quizzma, coletamos informações gerais e anônimas sobre seu desempenho
          nos quizzes, como acertos, erros e áreas temáticas de interesse. Esses dados são agregados para análises estatísticas e nunca
          incluímos informações pessoais identificáveis. Nosso objetivo é entender o nível de conscientização sobre desigualdade de gênero
          para fornecer insights às organizações relevantes e melhorar nossos conteúdos.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Compartilhamento de Dados</h2>
        <p className="mb-4">
          Os dados coletados são usados para criar relatórios de desempenho geral, os quais poderão ser compartilhados com
          organizações parceiras e ONGs voltadas para a igualdade de gênero. Nenhuma informação individual será enviada ao governo,
          apenas dados agregados para fins educacionais e de conscientização.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Uso Responsável do Quizzma</h2>
        <p className="mb-4">
          Ao acessar o Quizzma, você se compromete a utilizar a plataforma para fins educacionais e respeitar nossos termos.
          Qualquer tentativa de burlar ou manipular o sistema de quizzes poderá resultar no bloqueio de seu acesso.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Alterações nos Termos</h2>
        <p className="mb-4">
          O Quizzma poderá atualizar estes Termos e Condições conforme necessário. Recomendamos que você revise esta página
          periodicamente para estar sempre informado sobre eventuais mudanças.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Contato</h2>
        <p className="mb-4">
          Caso tenha dúvidas sobre nossos Termos e Condições ou sobre a forma como utilizamos os dados, entre em contato conosco
          através do e-mail suporte@quizzma.com.
        </p>

        <p className="text-center mt-6 font-medium">
          Ao clicar iniciar no Quizzma, você aceita nossos Termos e Condições e reconhece nossa política de coleta de dados.
        </p>
      </div>
    </motion.div>
  );
}
