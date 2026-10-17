import { SITE } from '../data/site.config';
import { buildAreaWhatsappMessage, buildWhatsappUrl } from './whatsapp';

describe('whatsapp utils', () => {
  it('monta o link sem mensagem', () => {
    expect(buildWhatsappUrl()).toBe(`https://wa.me/${SITE.phone.digits}`);
  });

  it('codifica a mensagem na URL', () => {
    const url = buildWhatsappUrl('Olá, tudo bem?');

    expect(url).toBe(`https://wa.me/${SITE.phone.digits}?text=${encodeURIComponent('Olá, tudo bem?')}`);
  });

  it('cita a área de atuação na mensagem inicial', () => {
    expect(buildAreaWhatsappMessage('Penal')).toContain('Penal');
  });
});
