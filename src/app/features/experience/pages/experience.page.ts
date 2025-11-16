import { Component, inject } from '@angular/core';
import { BackgroundServices } from '../../../shared/services/home/background.services';

@Component({
  selector: 'app-experience.page',
  imports: [],
  template: ` <p>experience.page works!</p> `,
  styles: ``,
})
export default class ExperiencePage {
  backgroundService = inject(BackgroundServices);

  ngOnInit(): void {
    this.backgroundService.changeBackground('/assets/images/portfolio_experience_background.png');
  }
}
