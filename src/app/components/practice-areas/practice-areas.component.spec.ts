import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRACTICE_AREAS } from '../../data/practice-areas';
import { PracticeAreasComponent } from './practice-areas.component';

describe('PracticeAreasComponent', () => {
  let fixture: ComponentFixture<PracticeAreasComponent>;
  let element: HTMLElement;

  const dialog = (): HTMLDialogElement => element.querySelector('dialog')!;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreasComponent);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('exibe um cartão para cada área de atuação', () => {
    expect(element.querySelectorAll('.areas__card').length).toBe(PRACTICE_AREAS.length);
  });

  it('abre o diálogo com os detalhes da área clicada', () => {
    element.querySelector<HTMLButtonElement>('.areas__card')!.click();
    fixture.detectChanges();

    expect(dialog().open).toBeTrue();
    expect(dialog().querySelector('h3')?.textContent).toContain(PRACTICE_AREAS[0].name);
  });

  it('fecha o diálogo e limpa a área selecionada', async () => {
    element.querySelector<HTMLButtonElement>('.areas__card')!.click();
    fixture.detectChanges();

    // O evento `close` do <dialog> é disparado de forma assíncrona pelo navegador.
    const dialogClosed = new Promise((resolve) => dialog().addEventListener('close', resolve, { once: true }));
    dialog().querySelector<HTMLButtonElement>('.dialog__close')!.click();
    await dialogClosed;
    fixture.detectChanges();

    expect(dialog().open).toBeFalse();
    expect(dialog().querySelector('h3')).toBeNull();
  });
});
