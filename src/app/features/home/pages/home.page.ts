import { Component } from '@angular/core';
import { HomeArticle } from "../components/home-article/home-article";
import { PRES_MAIN, PRES_TITLE } from '../../../shared/constants/presentation-constant';
import { ButtonNextPage } from "../../../shared/components/button-next-page/button-next-page";
import { RouterLink } from "@angular/router";
import { SocialLink } from "../../../shared/components/social-link/social-link";
import { SocialItem } from '../../../shared/models/social-item.model';

@Component({
  selector: 'app-home.page',
  imports: [HomeArticle, ButtonNextPage, RouterLink, SocialLink],
  template: `
    <app-home-article [title]="articleTitle" [presentation]="articleResume"></app-home-article>
    <app-button-next-page
      [text]="'Continuer avec mes expériences'"
      [path]="'/experiences'"
    ></app-button-next-page>
    <app-social-link [socialItems]="socialItems"></app-social-link>
  `,
  styles: ``,
})
export default class HomePage {
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
}
