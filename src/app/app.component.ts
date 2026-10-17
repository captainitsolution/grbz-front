import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { LocationComponent } from './components/location/location.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { TeamComponent } from './components/team/team.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroCarouselComponent,
    TeamComponent,
    PracticeAreasComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {}
