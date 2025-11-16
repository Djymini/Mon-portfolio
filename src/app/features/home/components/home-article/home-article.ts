import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-article',
  imports: [RouterLink],
  templateUrl: './home-article.html',
  styleUrl: './home-article.scss',
})
export class HomeArticle {
  title = input.required<string>();
  presentation = input.required<string>();
}
