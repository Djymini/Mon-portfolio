import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectFacade } from '../../features/projects/services/project.facade';

export const projectResolver: ResolveFn<void> = (route, state) => {
  const projectFacade = inject(ProjectFacade);
  return projectFacade.loadExperience();
};
