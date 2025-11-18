import { ResolveFn } from '@angular/router';
import { ExperienceFacade } from '../../features/experiences/services/exeperience/experience.facade';
import { inject } from '@angular/core';

export const experienceResolver: ResolveFn<void> = (route, state) => {
  const experienceFacade = inject(ExperienceFacade);
  return experienceFacade.loadExperience();
};
