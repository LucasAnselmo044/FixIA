import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Ajuste o caminho de importação conforme necessário

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Verifique se o id é um número válido
  const quizId = parseInt(params.id, 10); // Certifique-se de que estamos usando um número

  if (isNaN(quizId)) {
    // Retorne um erro se o quizId não for um número válido
    return NextResponse.json({ error: 'ID do quiz inválido.' }, { status: 400 });
  }

  try {
    const questions = await prisma.question.findMany({
      where: {
        quizId: quizId, // Aqui estamos passando o quizId
      },
      include: {
        options: true,
      },
    });

    return NextResponse.json(questions);
  } catch (error) {
    console.error('Erro ao buscar questões:', error);
    return NextResponse.error(); // Retorne um erro 500 para o cliente
  }
}
