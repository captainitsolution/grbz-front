import { SITE } from '../data/site.config';

const WHATSAPP_BASE_URL = 'https://wa.me';

/** Monta o link do WhatsApp do escritório, com mensagem inicial opcional. */
export function buildWhatsappUrl(message?: string): string {
  const url = `${WHATSAPP_BASE_URL}/${SITE.phone.digits}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

export function buildAreaWhatsappMessage(areaName: string): string {
  return `Olá! Gostaria de falar com uma advogada sobre ${areaName}.`;
}
