import { ContactChannel } from '../models/contact-channel.model';
import { buildWhatsappUrl } from '../utils/whatsapp';
import { SITE } from './site.config';

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: SITE.phone.display,
    href: buildWhatsappUrl(),
    opensInNewTab: true,
  },
  {
    icon: 'phone',
    label: 'Telefone',
    value: SITE.phone.display,
    href: `tel:+${SITE.phone.digits}`,
    opensInNewTab: false,
  },
  {
    icon: 'mail',
    label: 'E-mail',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    opensInNewTab: false,
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: SITE.instagram.handle,
    href: SITE.instagram.url,
    opensInNewTab: true,
  },
];
