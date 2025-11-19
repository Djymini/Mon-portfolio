import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-menu',
  imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule, RouterLink, NgOptimizedImage, NgOptimizedImage],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
})
export class HeaderMenu {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Expériences',
        routerLink: '/experiences',
        root: true,
      },
      {
        label: 'Projets',
        routerLink: '/projects',
        root: true,
      },
    ];
  }
}
