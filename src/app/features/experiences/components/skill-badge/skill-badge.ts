import { SkillItem } from './../../models/skill-item.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  imports: [],
  templateUrl: './skill-badge.html',
  styleUrl: './skill-badge.scss',
})
export class SkillBadge {
  skillItem = input.required<SkillItem>();
}
