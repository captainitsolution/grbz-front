import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV_LINKS } from '../../data/navigation';
import { SITE } from '../../data/site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';

/** Distância rolada (em px) a partir da qual o cabeçalho ganha fundo sólido. */
const SOLID_HEADER_SCROLL_THRESHOLD_PX = 24;

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:scroll)': 'updateScrollState()' },
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly siteName = SITE.name;
  protected readonly navLinks = NAV_LINKS;
  protected readonly whatsappUrl = buildWhatsappUrl();
  protected readonly instagramUrl = SITE.instagram.url;

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected updateScrollState(): void {
    this.isScrolled.set(window.scrollY > SOLID_HEADER_SCROLL_THRESHOLD_PX);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
