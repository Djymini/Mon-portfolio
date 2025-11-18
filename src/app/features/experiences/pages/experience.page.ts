import { Component, inject } from '@angular/core';
import { BackgroundServices } from '../../../shared/services/home/background.services';
import { ButtonNextPage } from '../../../shared/components/button-next-page/button-next-page';
import { SocialItem } from '../../../shared/models/social-item.model';
import { SOCIAL_ITEMS } from '../../../shared/constants/presentation-constant';
import { SocialLink } from '../../../shared/components/social-link/social-link';
import { CarouselExperience } from '../components/carousel-experience/carousel-experience';
import { CarouselTechnologies } from '../components/carousel-technologies/carousel-technologies';

@Component({
  selector: 'app-experience.page',
  imports: [ButtonNextPage, SocialLink, CarouselExperience, CarouselTechnologies],
  template: `
    <h1>Mes expériences</h1>
    <app-carousel-technologies></app-carousel-technologies>
    <app-carousel-experience></app-carousel-experience>
    <app-button-next-page
      [text]="'Continuer avec mes projets'"
      [path]="'/projects'"
    ></app-button-next-page>
    <app-social-link [socialItems]="socialItems"></app-social-link>
  `,
  styles: ``,
})
export default class ExperiencePage {
  backgroundService = inject(BackgroundServices);

  socialItems: SocialItem[] = SOCIAL_ITEMS;

  ngOnInit(): void {
    this.backgroundService.changeBackground('/assets/images/portfolio_experience_background.png');
  }
}
