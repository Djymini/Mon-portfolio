import { Component, inject } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { ExperienceStore } from '../../services/exeperience/experience.store';
import { TimelineApp } from "../timeline/timeline";

@Component({
  selector: 'app-carousel-experience',
  imports: [AccordionModule, CommonModule, TimelineApp],
  templateUrl: './carousel-experience.html',
  styleUrl: './carousel-experience.scss',
})
export class CarouselExperience {
  experienceStore = inject(ExperienceStore);

  experienceItems = this.experienceStore.experience();
}
