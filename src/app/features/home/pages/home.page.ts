import { Component, inject, OnInit } from '@angular/core';
import { HomeArticle } from "../components/home-article/home-article";
import { PRES_MAIN, PRES_TITLE } from '../../../shared/constants/presentation-constant';
import { ButtonNextPage } from "../../../shared/components/button-next-page/button-next-page";
import { SocialLink } from "../../../shared/components/social-link/social-link";
import { SocialItem } from '../../../shared/models/social-item.model';
import { BackgroundServices } from '../../../shared/services/home/background.services';

@Component({
  selector: 'app-home.page',
  imports: [HomeArticle, ButtonNextPage, SocialLink],
  template: `
    <app-home-article [title]="articleTitle" [presentation]="articleResume"></app-home-article>
    <app-button-next-page [text]="'Continuer avec mes expériences'" [path]="'/experiences'"></app-button-next-page>
    <app-social-link [socialItems]="socialItems"></app-social-link>
  `,
  styles: ``,
})
export default class HomePage implements OnInit{
  backgroundService = inject(BackgroundServices);

  articleTitle: string = PRES_TITLE;
  articleResume: string = PRES_MAIN;

  socialItems: SocialItem[] = [
    {
      icon: 'pi-github',
      url: 'https://github.com/Djymini',
    },
    {
      icon: 'pi-link',
      url: 'https://loutrepixel.itch.io/',
    },
  ];

  ngOnInit(): void {
      this.backgroundService.changeBackground('/assets/images/portfolio_home_background.png');
  }
}
