import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from './icon-name';

/** Ícone decorativo vindo do sprite `public/icons/sprite.svg`. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg class="icon" aria-hidden="true" focusable="false">
      <use [attr.href]="'icons/sprite.svg#' + name()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }

    .icon {
      width: 1em;
      height: 1em;
    }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
