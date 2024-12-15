// app/api/daily-challenge/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const dailyChallenge = {
    question: "Qual é o objetivo principal da igualdade de gênero?",
    options: [
      { id: 1, text: "Promover a discriminação", isCorrect: false },
      { id: 2, text: "Garantir oportunidades iguais", isCorrect: true },
      { id: 3, text: "Restringir direitos", isCorrect: false },
      { id: 4, text: "Criar desigualdade", isCorrect: false },
    ],
  };

  return NextResponse.json(dailyChallenge);
}
