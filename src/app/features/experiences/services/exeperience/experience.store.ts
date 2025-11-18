import { computed, Injectable, signal } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceStore {
  private experiencesSignal = signal<ExperienceItem[]>([]);

  experience = computed(() => this.experiencesSignal());

  loadSkillDevWeb(newExperienceArray: ExperienceItem[]) {
    this.experiencesSignal.set(newExperienceArray);
  }
}
