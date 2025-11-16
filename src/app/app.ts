import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenu } from "./core/header/components/header-menu/header-menu";
import { BackgroundServices } from './shared/services/home/background.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mon-portfolio');
}
