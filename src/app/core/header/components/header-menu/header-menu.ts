import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header-menu',
  imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
})
export class HeaderMenu {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'A propos',
        routerLink: '/',
        root: true,
      },
      {
        label: 'Expériences',
        routerLink: '/',
        root: true,
      },
      {
        label: 'Projets',
        routerLink: '/',
        root: true,
      },
      {
        label: 'Contact',
        routerLink: '/',
        root: true,
      },
    ];
  }
}
