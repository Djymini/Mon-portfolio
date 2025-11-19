import { Component, inject } from '@angular/core';
import { ProjectContainer } from "../components/project-container/project-container";
import { ButtonNextPage } from "../../../shared/components/button-next-page/button-next-page";
import { SocialLink } from "../../../shared/components/social-link/social-link";
import { BackgroundServices } from '../../../shared/services/home/background.services';
import { SocialItem } from '../../../shared/models/social-item.model';
import { SOCIAL_ITEMS } from '../../../shared/constants/presentation-constant';

@Component({
  selector: 'app-project.page',
  imports: [ProjectContainer, ButtonNextPage, SocialLink],
  template: `
    <h1>Mes projets</h1>
    <app-project-container></app-project-container>
    <app-button-next-page [text]="'Retour au départ'" [path]="'/'"></app-button-next-page>
    <app-social-link [socialItems]="socialItems"></app-social-link>
  `,
  styles: ``,
})
export default class ProjectPage {
  backgroundService = inject(BackgroundServices);

  socialItems: SocialItem[] = SOCIAL_ITEMS;

  ngOnInit(): void {
    this.backgroundService.changeBackground('/assets/images/portfolio_projets_background.png');
  }
}
