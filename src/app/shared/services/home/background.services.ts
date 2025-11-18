import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundServices {
  private backgroundSignal = signal<string>('/assets/images/portfolio_home_background.png');
  background = computed(() => this.backgroundSignal());

  changeBackground(newBackground: string) {
    this.backgroundSignal.set(newBackground);

    document.body.style.backgroundImage = `url("${newBackground}"), radial-gradient(circle at center, var(--background), var(--backround2))`;

    document.body.style.backgroundSize = '100% 100%, cover';
    document.body.style.backgroundRepeat = 'no-repeat, np-repeat';
  }
}
