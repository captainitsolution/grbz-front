import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, EMPTY, switchMap, timer } from 'rxjs';
import { HERO_SLIDES } from '../../data/hero-slides';
import { IconComponent } from '../../shared/icon/icon.component';
import { buildWhatsappUrl } from '../../utils/whatsapp';

const AUTOPLAY_INTERVAL_MS = 6000;

@Component({
  selector: 'app-hero-carousel',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent {
  protected readonly slides = HERO_SLIDES;
  protected readonly whatsappUrl = buildWhatsappUrl();
  protected readonly currentIndex = signal(0);

  /** Autoplay pausado por hover/foco ou quando o usuário prefere menos movimento. */
  protected readonly isPaused = signal(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  constructor() {
    this.startAutoplay();
  }

  protected next(): void {
    this.goTo(this.currentIndex() + 1);
  }

  protected previous(): void {
    this.goTo(this.currentIndex() - 1);
  }

  protected goTo(index: number): void {
    const total = this.slides.length;
    this.currentIndex.set((index + total) % total);
  }

  protected pause(): void {
    this.isPaused.set(true);
  }

  protected resume(): void {
    this.isPaused.set(false);
  }

  /** Reinicia a contagem a cada troca de slide ou mudança de pausa. */
  private startAutoplay(): void {
    combineLatest([toObservable(this.currentIndex), toObservable(this.isPaused)])
      .pipe(
        switchMap(([, isPaused]) => (isPaused ? EMPTY : timer(AUTOPLAY_INTERVAL_MS))),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.next());
  }
}
