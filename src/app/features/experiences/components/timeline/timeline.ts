import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item.model';

import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-timeline',
  imports: [Timeline, CardModule, ButtonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class TimelineApp {
  experienceItems = input.required<ExperienceItem[]>();
}
