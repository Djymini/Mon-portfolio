import { ExperienceApi } from './experience.api';
import { inject, Injectable } from '@angular/core';
import { ExperienceStore } from './experience.store';

@Injectable({
  providedIn: 'root',
})
export class ExperienceFacade {
  experienceStore = inject(ExperienceStore);
  experienceApi = inject(ExperienceApi);

  async loadExperience() {
    const experience = await this.experienceApi.getExperience('experience-items.json');
    this.experienceStore.loadSkillDevWeb(experience);
  }
}
