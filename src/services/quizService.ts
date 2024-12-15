// lib/quizService.ts
import { prisma } from '@/lib/prisma';

export async function getCompletedQuizzesByUser(userId: string) {
  return await prisma.result.findMany({
    where: { userId },
    include: {
      quiz: {
        select: {
          title: true,
          description: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
}
