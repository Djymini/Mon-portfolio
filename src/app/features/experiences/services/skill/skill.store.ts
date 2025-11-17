import { computed, Injectable, signal } from '@angular/core';
import { SkillItem } from '../../models/skill-item.model';

@Injectable({
  providedIn: 'root',
})
export class SkillStore {
  private skillItemDevWebSignal = signal<SkillItem[] | undefined>(undefined);
  private skillItemDevMobileSignal = signal<SkillItem[] | undefined>(undefined);
  private skillItemDevGameSignal = signal<SkillItem[] | undefined>(undefined);
  private skillItemOtherSignal = signal<SkillItem[] | undefined>(undefined);

  skillItemDevWeb = computed(() => this.skillItemDevWebSignal());
  skillItemDevMobile = computed(() => this.skillItemDevMobileSignal());
  skillItemDevGame = computed(() => this.skillItemDevGameSignal());
  skillItemDevOther = computed(() => this.skillItemOtherSignal());

  loadSkillDevWeb(newSkillArray: SkillItem[]) {
    this.skillItemDevGameSignal.set(newSkillArray);
  }

  loadSkillDevMobile(newSkillArray: SkillItem[]) {
    this.skillItemDevMobileSignal.set(newSkillArray);
  }

  loadSkillDevGame(newSkillArray: SkillItem[]) {
    this.skillItemDevGameSignal.set(newSkillArray);
  }

  loadSkillOther(newSkillArray: SkillItem[]) {
    this.skillItemOtherSignal.set(newSkillArray);
  }
}
