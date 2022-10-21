export interface ProjectProps {
  id?: number
  projectName?: string
  projectSubTitle?: string
  createdAt?: string

  tasks?: {
    total: number
    concluded: number
  }

  attachments?: number
}

export const projects = [
  {
    id: 1,
    projectName: 'Força de vendas',
    projectSubTitle: 'Aplicativo para venda externa com sincronização online.',
    createdAt: '2022-10-10',

    tasks: {
      total: 10,
      concluded: 7,
    },

    attachments: 3,
  },

  {
    id: 2,
    projectName: 'Dashboard Financeiro',
    projectSubTitle: 'Aplicativo web para exibição de dados financeiros',
    createdAt: '2022-08-10',

    tasks: {
      total: 25,
      concluded: 3,
    },

    attachments: 14,
  },

  {
    id: 3,
    projectName: 'Relatório de análise de estoque',
    projectSubTitle:
      'Relatório para análise de custo e estoque, para efeutar novas comrpas de resposição',
    createdAt: '2022-10-09',

    tasks: {
      total: 2,
      concluded: 0,
    },

    attachments: 0,
  },

  {
    id: 4,
    projectName: 'Análise de crédito',
    projectSubTitle:
      'Desenvolver a rotina de análise de crédito no cadastro de clientes.',
    createdAt: '2022-10-07',

    tasks: {
      total: 12,
      concluded: 7,
    },

    attachments: 1,
  },

  {
    id: 5,
    projectName: 'Painel administrativo',
    projectSubTitle:
      'Desenvolver painel administrativo para controle do ecommerce.',
    createdAt: '2022-10-07',

    tasks: {
      total: 89,
      concluded: 15,
    },

    attachments: 44,
  },

  {
    id: 6,
    projectName: 'Venda Mobile',
    projectSubTitle:
      'Desenvolver Aplicativo de venda online, para uso interno em loja.',
    createdAt: '2022-10-10',

    tasks: {
      total: 122,
      concluded: 0,
    },

    attachments: 32,
  },

  {
    id: 7,
    projectName: 'Dashboard mobile',
    projectSubTitle: 'App mobile para acompanhar desempenho da empresa.',
    createdAt: '2022-10-10',

    tasks: {
      total: 47,
      concluded: 8,
    },

    attachments: 23,
  },
]
