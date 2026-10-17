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
      'Ações indenizatórias e reparação de danos',
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
      'Acompanhamos investigações e processos criminais, da fase policial ao julgamento, com atenção às garantias constitucionais e ao sigilo profissional.',
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
    id: 'previdenciario',
    name: 'Previdenciário',
    illustration: 'images/areas/previdenciario.svg',
    summary: 'Aposentadorias, benefícios do INSS e revisões.',
    description:
      'Orientamos desde o planejamento da aposentadoria até a defesa judicial de benefícios negados, cessados ou concedidos com valor inferior ao devido.',
    topics: [
      'Aposentadorias por idade, tempo de contribuição e especial',
      'Auxílio por incapacidade e BPC/LOAS',
      'Pensão por morte e auxílio-reclusão',
      'Revisão de benefícios e planejamento previdenciário',
    ],
  },
  {
    id: 'imobiliario',
    name: 'Imobiliário',
    illustration: 'images/areas/imobiliario.svg',
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
    id: 'consumidor',
    name: 'Consumidor',
    illustration: 'images/areas/consumidor.svg',
    summary: 'Defesa dos seus direitos nas relações de consumo.',
    description:
      'Atuamos na solução de conflitos entre consumidores e fornecedores de produtos e serviços, de forma extrajudicial ou judicial.',
    topics: [
      'Cobranças indevidas e negativação do nome',
      'Produtos e serviços com defeito ou não entregues',
      'Problemas com bancos, planos de saúde e telefonia',
      'Cancelamentos, contratos abusivos e fraudes',
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
