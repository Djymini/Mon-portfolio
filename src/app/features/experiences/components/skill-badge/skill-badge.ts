import { SkillItem } from './../../models/skill-item.model';
import { Component, input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-skill-badge',
  imports: [NgOptimizedImage],
  templateUrl: './skill-badge.html',
  styleUrl: './skill-badge.scss',
})
export class SkillBadge {
  skillItem = input.required<SkillItem>();
}
