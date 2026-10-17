import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/site.config';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly site = SITE;
  protected readonly currentYear = new Date().getFullYear();
}
