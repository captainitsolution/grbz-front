import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE, SITE_FULL_ADDRESS } from '../../data/site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps';

@Component({
  selector: 'app-location',
  imports: [SectionHeadingComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  protected readonly address = SITE.address;
  protected readonly fullAddress = SITE_FULL_ADDRESS;

  private readonly query = encodeURIComponent(SITE_FULL_ADDRESS);
  protected readonly directionsUrl = `${GOOGLE_MAPS_URL}/search/?api=1&query=${this.query}`;

  /** URL construída apenas a partir do endereço fixo do escritório, por isso é seguro marcá-la como confiável. */
  protected readonly mapEmbedUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `${GOOGLE_MAPS_URL}?q=${this.query}&output=embed`,
  );
}
