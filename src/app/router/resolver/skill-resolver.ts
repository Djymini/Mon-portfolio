import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SkillFacade } from '../../features/experiences/services/skill/skill.facade';

export const skillResolver: ResolveFn<void> = (route, state) => {
  const productFacade = inject(SkillFacade);
  return productFacade.loadAllSkills();
};
