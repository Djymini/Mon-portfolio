import { Component, input } from '@angular/core';
import { SocialItem } from '../../models/social-item.model';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-social-link',
  imports: [NgClass, NgStyle],
  templateUrl: './social-link.html',
  styleUrl: './social-link.scss',
})
export class SocialLink {
  socialItems = input.required<SocialItem[]>();
}
