import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



async function main() {
  // Deletar as opções antes de atualizar as categorias
  console.log('Deletando opções antigas associadas a questões...');
  await prisma.option.deleteMany({});
  
  // Deletar todas as questões se necessário
  console.log('Deletando questões antigas...');
  await prisma.question.deleteMany({});
  
  // Deletar todas as categorias antigas
  console.log('Deletando categorias antigas...');
  await prisma.category.deleteMany({});
  
  // Definindo novas categorias
  const newCategories = [
    { name: 'Inteligência Artificial e Machine Learning' },
    { name: 'DevOps e Infraestrutura' },
    { name: 'Cibersegurança' },
    { name: 'Programação Orientada a Objetos' },
    { name: 'API e Integrações' },
  ];

  console.log('Todas as questões e categorias deletadas com sucesso!')

  await Promise.all(
    newCategories.map(async (category) => {
      await prisma.category.upsert({
        where: { name: category.name },
        update: {}, 
        create: category, 
      });
    })
  );

  // Defina os novos quizzes com perguntas e opções de resposta, incluindo description
  const newQuizzes = [
    {
      title: 'Quiz sobre Inteligência Artificial e Machine Learning',
      description: 'Teste seu conhecimento sobre Inteligência Artificial e Machine Learning',
      categoryName: 'Inteligência Artificial e Machine Learning',
      questions: [
        {
            text: 'O que é aprendizado supervisionado?',
            options: [
              { text: 'Um modelo de ML que aprende a partir de dados rotulados.', isCorrect: true },
              { text: 'Um algoritmo de busca.', isCorrect: false },
              { text: 'Um tipo de rede neural.', isCorrect: false },
              { text: 'Um modelo de ML que aprende sem usar dados rotulados.', isCorrect: false },
            ],
          },
          {
            text: 'Qual algoritmo é comumente usado em problemas de classificação?',
            options: [
              { text: 'Árvore de Decisão', isCorrect: true },
              { text: 'Regressão Linear', isCorrect: false },
              { text: 'K-Means', isCorrect: false },
              { text: 'PCA (Análise de Componentes Principais)', isCorrect: false },
            ],
          },
          {
            text: 'Qual técnica de ML é usada para reduzir a dimensionalidade de grandes volumes de dados?',
            options: [
              { text: 'Análise de Regressão', isCorrect: false },
              { text: 'PCA', isCorrect: true },
              { text: 'KNN', isCorrect: false },
              { text: 'Árvores de Decisão', isCorrect: false },
            ],
          },
          {
            text: 'Qual das opções abaixo é um exemplo de rede neural profunda?',
            options: [
              { text: 'Redes neurais feedforward', isCorrect: true },
              { text: 'Máquinas de vetor de suporte', isCorrect: false },
              { text: 'Árvores de Decisão', isCorrect: false },
              { text: 'K-Means', isCorrect: false },
            ],
          },
          {
            text: 'Qual é a função da técnica de regularização L2 (Ridge) em modelos de ML?',
            options: [
              { text: 'Reduzir o overfitting adicionando uma penalidade ao modelo', isCorrect: true },
              { text: 'Aumentar a precisão do modelo', isCorrect: false },
              { text: 'Melhorar a interpretação do modelo', isCorrect: false },
              { text: 'Eliminando características irrelevantes', isCorrect: false },
            ],
          },
          {
            text: 'O que é um conjunto de validação em um modelo de aprendizado de máquina?',
            options: [
              { text: 'O conjunto de dados usado para treinar o modelo.', isCorrect: false },
              { text: 'O conjunto de dados usado para testar o modelo.', isCorrect: false },
              { text: 'O conjunto de dados usado para ajustar os parâmetros do modelo.', isCorrect: true },
              { text: 'O conjunto de dados usado para medir a precisão do modelo.', isCorrect: false },
            ],
          },
      ],
    },  
    {
      title: 'Quiz sobre DevOps e Infraestrutura',
      description: 'Teste seus conhecimentos sobre DevOps e Infraestrutura',
      categoryName: 'DevOps e Infraestrutura',
      questions: [
      {
  text: 'O que é o conceito de "Infraestrutura como Código" (IaC)?',
  options: [
    { text: 'A prática de gerenciar infraestrutura de TI por meio de código e automação.', isCorrect: true },
    { text: 'A prática de escrever scripts manuais para configurar servidores.', isCorrect: false },
    { text: 'A prática de monitorar a infraestrutura em tempo real.', isCorrect: false },
    { text: 'A prática de testar aplicativos antes de implementá-los.', isCorrect: false },
  ],
},
{
  text: 'Qual ferramenta é comumente usada para automação de configurações e provisionamento de servidores?',
  options: [
    { text: 'Docker', isCorrect: false },
    { text: 'Ansible', isCorrect: true },
    { text: 'Kubernetes', isCorrect: false },
    { text: 'Jenkins', isCorrect: false },
  ],
},
{
  text: 'Qual é a principal função do Docker em um ambiente de DevOps?',
  options: [
    { text: 'Automatizar testes de software.', isCorrect: false },
    { text: 'Gerenciar containers e criar ambientes isolados para aplicações.', isCorrect: true },
    { text: 'Gerenciar infraestrutura de rede.', isCorrect: false },
    { text: 'Controlar o versionamento de código.', isCorrect: false },
  ],
},
{
  text: 'O que é a prática de CI/CD (Integração Contínua/Entrega Contínua)?',
  options: [
    { text: 'A prática de integrar mudanças no código de forma contínua e automatizar o processo de implantação.', isCorrect: true },
    { text: 'A prática de criar um repositório único para armazenar todos os projetos de código.', isCorrect: false },
    { text: 'A prática de monitorar o desempenho do sistema em tempo real.', isCorrect: false },
    { text: 'A prática de realizar testes de desempenho nas aplicações antes do lançamento.', isCorrect: false },
  ],
},
{
  text: 'Qual das opções abaixo é um serviço de gerenciamento de containers?',
  options: [
    { text: 'Docker', isCorrect: false },
    { text: 'Kubernetes', isCorrect: true },
    { text: 'Jenkins', isCorrect: false },
    { text: 'Terraform', isCorrect: false },
  ],
},
{
  text: 'O que é uma "pipeline" em um ambiente DevOps?',
  options: [
    { text: 'Uma sequência automatizada de etapas para integrar, testar e entregar código.', isCorrect: true },
    { text: 'Um tipo de banco de dados usado para armazenar logs de operações.', isCorrect: false },
    { text: 'Um ambiente virtual para rodar testes de integração.', isCorrect: false },
    { text: 'Um processo manual de gerenciamento de servidores.', isCorrect: false },
        ],
    },
      ],
    },    
    {
      title: 'Quiz sobre Cibersegurança',
      description: 'Teste seu conhecimento sobre Cibersegurança.',
      categoryName: 'Cibersegurança',
      questions: [
        {
            text: 'O que é um ataque de Phishing?',
            options: [
              { text: 'Um tipo de ataque onde um invasor tenta roubar informações pessoais, se passando por uma entidade confiável.', isCorrect: true },
              { text: 'Um ataque de negação de serviço que sobrecarrega um servidor.', isCorrect: false },
              { text: 'Uma técnica usada para analisar e monitorar pacotes de dados na rede.', isCorrect: false },
              { text: 'Uma estratégia para evitar que malwares sejam detectados pelos antivírus.', isCorrect: false },
            ],
          },
          {
            text: 'O que significa "Autenticação de dois fatores" (2FA)?',
            options: [
              { text: 'Um processo de segurança que exige duas etapas para confirmar a identidade de um usuário.', isCorrect: true },
              { text: 'Um método de criptografia de dados durante a transmissão.', isCorrect: false },
              { text: 'A verificação de identidade por meio de um código gerado a cada acesso.', isCorrect: false },
              { text: 'Uma técnica de backup de dados em um local remoto.', isCorrect: false },
            ],
          },
          {
            text: 'O que é um ataque de DDoS (Distributed Denial of Service)?',
            options: [
              { text: 'Um ataque onde múltiplos sistemas sobrecarregam um servidor, tornando-o inacessível.', isCorrect: true },
              { text: 'Um tipo de ataque direcionado à manipulação de tráfego de rede.', isCorrect: false },
              { text: 'Um método de roubo de informações através de um dispositivo comprometido.', isCorrect: false },
              { text: 'Uma forma de fraude financeira online envolvendo transações ilegais.', isCorrect: false },
            ],
          },
          {
            text: 'O que é uma "VPN" (Virtual Private Network)?',
            options: [
              { text: 'Uma rede privada que permite a navegação na internet de forma segura e criptografada.', isCorrect: true },
              { text: 'Uma ferramenta usada para bloquear o acesso a sites maliciosos.', isCorrect: false },
              { text: 'Um tipo de firewall que filtra tráfego de rede.', isCorrect: false },
              { text: 'Um protocolo de comunicação para proteger dados em transações bancárias.', isCorrect: false },
            ],
          },
          {
            text: 'O que é "ransomware"?',
            options: [
              { text: 'Um tipo de malware que criptografa arquivos e exige um resgate para liberar o acesso.', isCorrect: true },
              { text: 'Um software antivírus usado para detectar ameaças em um sistema.', isCorrect: false },
              { text: 'Uma técnica de ataque que sobrecarrega um sistema com dados falsos.', isCorrect: false },
              { text: 'Um tipo de phishing que finge ser um site legítimo para roubar dados de login.', isCorrect: false },
            ],
          },
          {
            text: 'O que é um "firewall"?',
            options: [
              { text: 'Um sistema de segurança que monitora e controla o tráfego de rede, bloqueando acessos não autorizados.', isCorrect: true },
              { text: 'Um tipo de malware que destrói dados em um sistema infectado.', isCorrect: false },
              { text: 'Uma técnica de criptografia de dados para proteger a comunicação entre servidores.', isCorrect: false },
              { text: 'Uma ferramenta para analisar vulnerabilidades de segurança em aplicativos web.', isCorrect: false },
            ],
        },
        ],
    },
    {
      title: 'Quiz sobre Programação Orientada a Objetos',
      description: 'Teste seu conhecimento sobre Programação Orientada a Objetos',
      categoryName: 'Programação Orientada a Objetos',
        questions: [
          {
            text: 'O que é encapsulamento em Programação Orientada a Objetos?',
            options: [
              { text: 'Um mecanismo de esconder os detalhes internos de um objeto.', isCorrect: true },
              { text: 'Uma técnica para herdar propriedades de outra classe.', isCorrect: false },
              { text: 'Um conceito para criar múltiplas funções com o mesmo nome.', isCorrect: false },
              { text: 'Um método de acessar atributos públicos diretamente.', isCorrect: false },
            ],
          },
          {
            text: 'Qual dos conceitos abaixo está relacionado ao reuso de código entre classes?',
            options: [
              { text: 'Herança', isCorrect: true },
              { text: 'Polimorfismo', isCorrect: false },
              { text: 'Encapsulamento', isCorrect: false },
              { text: 'Abstração', isCorrect: false },
            ],
          },
          {
            text: 'O que é polimorfismo em POO?',
            options: [
              { text: 'A capacidade de uma classe ter várias instâncias.', isCorrect: false },
              { text: 'A habilidade de métodos terem diferentes comportamentos dependendo do objeto.', isCorrect: true },
              { text: 'A prática de ocultar dados internos.', isCorrect: false },
              { text: 'Um processo de criar objetos usando herança.', isCorrect: false },
            ],
          },
          {
            text: 'Qual das alternativas é um exemplo de abstração?',
            options: [
              { text: 'Definir métodos genéricos em uma classe base para serem implementados por subclasses.', isCorrect: true },
              { text: 'A criação de objetos a partir de uma classe.', isCorrect: false },
              { text: 'Ocultar os detalhes de implementação e mostrar apenas a funcionalidade essencial.', isCorrect: false },
              { text: 'Definir variáveis privadas dentro de uma classe.', isCorrect: false },
            ],
          },
          {
            text: 'Qual é a principal finalidade da herança em POO?',
            options: [
              { text: 'Permitir que uma classe derive as características de outra classe.', isCorrect: true },
              { text: 'Ocultar detalhes internos de uma classe.', isCorrect: false },
              { text: 'Criar múltiplos métodos com o mesmo nome.', isCorrect: false },
              { text: 'Dividir uma classe em várias subclasses.', isCorrect: false },
            ],
          },
          {
            text: 'O que é um método estático em POO?',
            options: [
              { text: 'Um método que pertence a uma instância específica de uma classe.', isCorrect: false },
              { text: 'Um método que pode ser chamado sem criar uma instância da classe.', isCorrect: true },
              { text: 'Um método que sempre retorna um valor booleano.', isCorrect: false },
              { text: 'Um método que substitui outro em uma classe herdada.', isCorrect: false },
            ],
        },
        ],
    },
    {
      title: 'Quiz sobre API e Integrações',
      description: 'Teste seu conhecimento sobre APIs e Integrações',
      categoryName: 'API e Integrações',
      questions: [
        {
          text: 'O que é uma API (Interface de Programação de Aplicações)?',
          options: [
            { text: 'Uma biblioteca de funções e métodos que facilitam o desenvolvimento de software.', isCorrect: false },
            { text: 'Um protocolo de comunicação para a troca de dados entre sistemas.', isCorrect: true },
            { text: 'Uma ferramenta para criar bancos de dados.', isCorrect: false },
            { text: 'Uma forma de programar com linguagens específicas para dispositivos móveis.', isCorrect: false }
          ]
        },
        {
          text: 'Qual é a principal função de uma API RESTful?',
          options: [
            { text: 'Permitir comunicação entre sistemas usando requisições HTTP e uma arquitetura sem estado.', isCorrect: true },
            { text: 'Gerenciar conexões em tempo real entre sistemas.', isCorrect: false },
            { text: 'Fornecer interfaces gráficas para interação com o sistema.', isCorrect: false },
            { text: 'Conectar sistemas a bancos de dados.', isCorrect: false }
          ]
        },
        {
          text: 'Qual método HTTP é utilizado para criar um novo recurso em uma API RESTful?',
          options: [
            { text: 'GET', isCorrect: false },
            { text: 'POST', isCorrect: true },
            { text: 'PUT', isCorrect: false },
            { text: 'DELETE', isCorrect: false }
          ]
        },
        {
          text: 'O que é uma chave de API?',
          options: [
            { text: 'Uma senha usada para criptografar a comunicação entre sistemas.', isCorrect: false },
            { text: 'Uma string única que autentica o acesso a uma API.', isCorrect: true },
            { text: 'Uma configuração de segurança para bancos de dados.', isCorrect: false },
            { text: 'Uma URL que define as rotas de uma API.', isCorrect: false }
          ]
        },
        {
          text: 'O que é o JSON (JavaScript Object Notation) em relação às APIs?',
          options: [
            { text: 'Um tipo de banco de dados usado por APIs.', isCorrect: false },
            { text: 'Um formato de dados leve e fácil de ler utilizado para trocar informações entre sistemas.', isCorrect: true },
            { text: 'Uma biblioteca JavaScript usada para conectar APIs.', isCorrect: false },
            { text: 'Um protocolo de comunicação usado por APIs.', isCorrect: false }
          ]
        },
        {
          text: 'O que significa a sigla OAuth em APIs?',
          options: [
            { text: 'Uma forma de autenticação segura em APIs usando tokens.', isCorrect: true },
            { text: 'Uma especificação de como fazer requisições de dados.', isCorrect: false },
            { text: 'Uma linguagem para definir integrações entre sistemas.', isCorrect: false },
            { text: 'Um método para criptografar dados trocados entre servidores.', isCorrect: false }
          ]
        }
      ]
    }            
  ];

  // Insere ou atualiza os novos quizzes com as perguntas e opções adicionais
  await Promise.all(
    newQuizzes.map(async (quiz) => {
      const category = await prisma.category.findUnique({
        where: { name: quiz.categoryName },
      });

      if (category) {
        const existingQuiz = await prisma.quiz.findFirst({
          where: { title: quiz.title },
        });

        if (existingQuiz) {
          // Atualiza o quiz existente e recria as perguntas e opções
          await prisma.quiz.update({
            where: { id: existingQuiz.id },
            data: {
              description: quiz.description,
              categoryId: category.id,
              questions: {
                deleteMany: {}, // Remove as perguntas antigas
                create: quiz.questions.map((question) => ({
                  text: question.text,
                  options: {
                    create: question.options,
                  },
                })),
              },
            },
          });
        } else {
          // Cria o novo quiz com as perguntas e opções
          await prisma.quiz.create({
            data: {
              title: quiz.title,
              description: quiz.description,
              categoryId: category.id,
              questions: {
                create: quiz.questions.map((question) => ({
                  text: question.text,
                  options: {
                    create: question.options,
                  },
                })),
              },
            },
          });
        }
      }
    })
  );

  console.log('Novas categorias e quizzes adicionados ou atualizados com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });