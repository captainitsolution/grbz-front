import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LAWYERS } from '../../data/lawyers';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-team',
  imports: [SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  protected readonly lawyers = LAWYERS;
}
