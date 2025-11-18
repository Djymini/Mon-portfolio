import { inject, Injectable } from '@angular/core';
import { SkillApi } from './skill.api';
import { SkillStore } from './skill.store';

@Injectable({
  providedIn: 'root',
})
export class SkillFacade {
  skillStore = inject(SkillStore);
  skillApi = inject(SkillApi);

  async loadAllSkills() {
    const devWebSkills = await this.skillApi.getSkill('skill-item-dev-web.json');
    this.skillStore.loadSkillDevWeb(devWebSkills);

    const devMobileSkills = await this.skillApi.getSkill('skill-item-dev-mobile.json');
    this.skillStore.loadSkillDevMobile(devMobileSkills);

    const devGameSkills = await this.skillApi.getSkill('skill-item-dev-game.json');
    this.skillStore.loadSkillDevGame(devGameSkills);

    const otherSkills = await this.skillApi.getSkill('skill-item-other.json');
    this.skillStore.loadSkillOther(otherSkills);
  }
}
