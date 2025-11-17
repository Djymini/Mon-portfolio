import { SkillItem } from './../../models/skill-item.model';
import { Component, inject} from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { SkillBadge } from "../skill-badge/skill-badge";
import { SkillStore } from '../../services/skill/skill.store';

@Component({
  selector: 'app-carousel-technologies',
  imports: [AccordionModule, CommonModule, SkillBadge],
  templateUrl: './carousel-technologies.html',
  styleUrl: './carousel-technologies.scss',
})
export class CarouselTechnologies{
  skillStore = inject(SkillStore);

  skillItemsDevWeb: SkillItem[] = this.skillStore.skillItemDevWeb();
  skillItemsDevMobile: SkillItem[] = this.skillStore.skillItemDevMobile();
  skillItemsDevGame: SkillItem[] = this.skillStore.skillItemDevGame();
  skillItemsOther: SkillItem[] = this.skillStore.skillItemDevOther();
}
