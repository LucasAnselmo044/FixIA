import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Busca todas as categorias e inclui o ID do primeiro quiz associado
    const categories = await prisma.category.findMany({
      include: {
        quizzes: {
          select: {
            id: true, // Seleciona apenas o ID do quiz
          },
        },
      },
    });

    // Mapeia o retorno para incluir apenas o `quizId` do primeiro quiz relacionado
    const categoriesWithQuizId = categories.map((category) => ({
      id: category.id,
      name: category.name,
      quizId: category.quizzes[0]?.id || null, // Primeiro quiz ou null se não houver
    }));

    return NextResponse.json(categoriesWithQuizId);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return NextResponse.json({ message: 'Erro ao buscar categorias' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
