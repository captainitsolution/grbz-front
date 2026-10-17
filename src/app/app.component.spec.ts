import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('renderiza todas as seções da página', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    ['#inicio', '#advogadas', '#areas', '#localizacao', '#contato'].forEach((selector) => {
      expect(page.querySelector(selector)).withContext(selector).not.toBeNull();
    });
  });
});
