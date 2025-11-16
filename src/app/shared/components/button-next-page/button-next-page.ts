import { Component, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-next-page',
  imports: [],
  templateUrl: './button-next-page.html',
  styleUrl: './button-next-page.scss',
})
export class ButtonNextPage implements OnInit {
  constructor(private router: Router) {}
  text = input.required<string>();
  path = input.required<string>();

  arrowColor: string = '';

  ngOnInit() {
    const styles = getComputedStyle(document.documentElement);
    this.arrowColor = styles.getPropertyValue('--text').trim();
  }

  goToPage() {
    this.router.navigate([this.path]);
  }
}
