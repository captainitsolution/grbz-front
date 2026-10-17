import { PracticeArea } from '../models/practice-area.model';

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    id: 'civil',
    name: 'Civil e Família',
    illustration: 'images/areas/civil.svg',
    summary: 'Contratos, responsabilidade civil, inventários e questões familiares.',
    description:
      'Atuamos em conflitos do dia a dia e em momentos delicados da vida pessoal, buscando soluções que protejam seus direitos com o menor desgaste possível.',
    topics: [
      'Contratos e responsabilidade civil',
      'Divórcio, guarda e pensão alimentícia',
      'Inventários, partilhas e testamentos',
      'Ações indenizatórias e direito do consumidor',
    ],
  },
  {
    id: 'trabalhista',
    name: 'Trabalhista',
    illustration: 'images/areas/trabalhista.svg',
    summary: 'Orientação e defesa para trabalhadores e empresas.',
    description:
      'Prestamos assessoria consultiva e contenciosa nas relações de trabalho, sempre com análise individual de cada caso.',
    topics: [
      'Verbas rescisórias, horas extras e adicionais',
      'Reconhecimento de vínculo empregatício',
      'Assédio moral e acidentes de trabalho',
      'Consultoria preventiva para empresas',
    ],
  },
  {
    id: 'penal',
    name: 'Penal',
    illustration: 'images/areas/penal.svg',
    summary: 'Defesa técnica em todas as fases da persecução penal.',
    description:
      'Acompanhamos investigações e processos criminais com atenção às garantias constitucionais e ao sigilo profissional.',
    topics: [
      'Acompanhamento em delegacias e inquéritos',
      'Defesa em ações penais e no tribunal do júri',
      'Pedidos de liberdade e medidas cautelares',
      'Execução penal',
    ],
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    illustration: 'images/areas/empresarial.svg',
    summary: 'Estruturação, contratos e consultoria para empresas.',
    description:
      'Apoiamos empreendedores e empresas na tomada de decisões seguras, da abertura do negócio à resolução de conflitos.',
    topics: [
      'Constituição e estruturação societária',
      'Elaboração e revisão de contratos empresariais',
      'Consultoria jurídica preventiva',
      'Conflitos societários e cobrança de créditos',
    ],
  },
  {
    id: 'financeiro',
    name: 'Financeiro e Bancário',
    illustration: 'images/areas/financeiro.svg',
    summary: 'Revisão de contratos, dívidas e relações com instituições financeiras.',
    description:
      'Analisamos contratos e cobranças para verificar a regularidade das condições aplicadas e buscar alternativas de renegociação.',
    topics: [
      'Revisão de contratos bancários e financiamentos',
      'Renegociação de dívidas e superendividamento',
      'Cobranças indevidas e negativação',
      'Ações contra instituições financeiras',
    ],
  },
  {
    id: 'imobiliario',
    name: 'Imobiliário',
    illustration: 'images/areas/residencial.svg',
    summary: 'Compra, venda, locação e regularização de imóveis.',
    description:
      'Oferecemos segurança jurídica em cada etapa de operações imobiliárias, da análise documental ao contencioso.',
    topics: [
      'Compra e venda e análise de documentação',
      'Contratos de locação e distratos',
      'Usucapião e regularização de imóveis',
      'Questões condominiais',
    ],
  },
  {
    id: 'digital',
    name: 'Direito Digital',
    illustration: 'images/areas/digital.svg',
    summary: 'Proteção de dados, conteúdo online e fraudes eletrônicas.',
    description:
      'Atuamos na proteção de direitos no ambiente digital, tanto para pessoas físicas quanto para empresas.',
    topics: [
      'Adequação à LGPD e proteção de dados',
      'Remoção de conteúdo e crimes virtuais',
      'Termos de uso e contratos digitais',
      'Golpes e fraudes eletrônicas',
    ],
  },
  {
    id: 'ambiental',
    name: 'Ambiental',
    illustration: 'images/areas/ambiental.svg',
    summary: 'Licenciamento, regularização e defesa em matéria ambiental.',
    description:
      'Orientamos produtores, empresas e particulares sobre as exigências da legislação ambiental e atuamos na defesa administrativa e judicial.',
    topics: [
      'Licenciamento e regularização ambiental',
      'Defesa em autos de infração',
      'Compliance e consultoria ambiental',
      'Ações de reparação de danos',
    ],
  },
];
