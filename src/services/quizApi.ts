// services/quizApi.ts
export async function fetchCategories() {
  try {
    const response = await fetch('/api/categories');
    const data = await response.json();
    console.log('Categorias carregadas:', data); // Adicione este log
    return data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}
