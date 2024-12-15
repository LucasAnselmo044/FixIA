export async function submitQuizResult(quizId: number, userId: string) {
    const apiUrl = '/api/user/quizzes';
  
    const requestBody = {
      quizId,
      userId,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        return data;
      } else {
        const errorData = await response.json();
        console.error('Erro na requisição:', errorData);
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      throw new Error('Erro na comunicação com o servidor');
    }
  }
  