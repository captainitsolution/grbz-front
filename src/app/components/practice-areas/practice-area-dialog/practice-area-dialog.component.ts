import { ChangeDetectionStrategy, Component, effect, ElementRef, input, output, viewChild } from '@angular/core';
import { PracticeArea } from '../../../models/practice-area.model';
import { IconComponent } from '../../../shared/icon/icon.component';
import { buildAreaWhatsappMessage, buildWhatsappUrl } from '../../../utils/whatsapp';

/** Diálogo modal com os detalhes de uma área de atuação (usa o `<dialog>` nativo: foco, Esc e acessibilidade já inclusos). */
@Component({
  selector: 'app-practice-area-dialog',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './practice-area-dialog.component.html',
  styleUrl: './practice-area-dialog.component.scss',
})
export class PracticeAreaDialogComponent {
  readonly area = input<PracticeArea | null>(null);
  readonly closed = output<void>();

  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    effect(() => {
      const dialog = this.dialogRef().nativeElement;
      if (this.area() && !dialog.open) {
        dialog.showModal();
      }
    });
  }

  protected whatsappUrlFor(area: PracticeArea): string {
    return buildWhatsappUrl(buildAreaWhatsappMessage(area.name));
  }

  protected close(): void {
    this.dialogRef().nativeElement.close();
  }

  protected onDialogClosed(): void {
    this.closed.emit();
  }

  /** Fecha ao clicar no fundo escurecido (o clique cai no próprio `<dialog>`). */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialogRef().nativeElement) {
      this.close();
    }
  }
}
