export const SITE = {
  name: 'GRBZ Advogadas Associadas',
  shortName: 'GRBZ',
  fullName: 'Guerino Rodrigues Breda Zuccolotto Advogadas Associadas',
  description:
    'Escritório de advocacia formado por mulheres, com atuação em Direito Civil, Trabalhista, Penal, Empresarial e outras áreas, em Aracruz - ES.',
  phone: { display: '(27) 99253-5633', digits: '5527992535633' },
  email: 'grbzadvogadas@outlook.com',
  instagram: { handle: '@grbzadvogadas', url: 'https://www.instagram.com/grbzadvogadas/' },
  address: {
    street: 'Rua Aurélio Alvarenga, 104',
    district: 'Guaraná',
    city: 'Aracruz',
    state: 'ES',
    zipCode: '29195-421',
  },
} as const;

export const SITE_FULL_ADDRESS = [
  SITE.address.street,
  SITE.address.district,
  `${SITE.address.city} - ${SITE.address.state}`,
  SITE.address.zipCode,
].join(', ');
