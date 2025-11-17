import { SkillItem } from './../../models/skill-item.model';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { SkillBadge } from "../skill-badge/skill-badge";
import { SKILL_ITEM_DEV_WEB } from '../../../../shared/constants/presentation-constant';

@Component({
  selector: 'app-carousel-technologies',
  imports: [AccordionModule, CommonModule, SkillBadge],
  templateUrl: './carousel-technologies.html',
  styleUrl: './carousel-technologies.scss',
})
export class CarouselTechnologies implements OnInit{
  skillItems: SkillItem[] = SKILL_ITEM_DEV_WEB;

  ngOnInit(): void {
      for (let index = 0; index < this.skillItems.length; index++) {
        console.log(this.skillItems[index].skillIcon);
      }
  }
}
