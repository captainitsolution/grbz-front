import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HERO_SLIDES } from '../../data/hero-slides';
import { HeroCarouselComponent } from './hero-carousel.component';

describe('HeroCarouselComponent', () => {
  let fixture: ComponentFixture<HeroCarouselComponent>;
  let element: HTMLElement;

  const activeSlideIndex = (): number =>
    Array.from(element.querySelectorAll('.hero__slide')).findIndex((slide) =>
      slide.classList.contains('hero__slide--active'),
    );

  const clickButton = (label: string): void =>
    element.querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`)!.click();

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCarouselComponent);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('começa no primeiro slide', () => {
    expect(activeSlideIndex()).toBe(0);
  });

  it('avança para o próximo slide', () => {
    clickButton('Próximo slide');
    fixture.detectChanges();

    expect(activeSlideIndex()).toBe(1);
  });

  it('volta ao último slide ao retroceder a partir do primeiro', () => {
    clickButton('Slide anterior');
    fixture.detectChanges();

    expect(activeSlideIndex()).toBe(HERO_SLIDES.length - 1);
  });

  it('vai direto ao slide escolhido nos indicadores', () => {
    clickButton('Ir para o slide 3');
    fixture.detectChanges();

    expect(activeSlideIndex()).toBe(2);
  });
});
