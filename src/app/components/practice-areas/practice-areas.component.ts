import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PRACTICE_AREAS } from '../../data/practice-areas';
import { PracticeArea } from '../../models/practice-area.model';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { PracticeAreaDialogComponent } from './practice-area-dialog/practice-area-dialog.component';

@Component({
  selector: 'app-practice-areas',
  imports: [SectionHeadingComponent, IconComponent, PracticeAreaDialogComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './practice-areas.component.html',
  styleUrl: './practice-areas.component.scss',
})
export class PracticeAreasComponent {
  protected readonly areas = PRACTICE_AREAS;
  protected readonly selectedArea = signal<PracticeArea | null>(null);

  protected open(area: PracticeArea): void {
    this.selectedArea.set(area);
  }

  protected close(): void {
    this.selectedArea.set(null);
  }
}
