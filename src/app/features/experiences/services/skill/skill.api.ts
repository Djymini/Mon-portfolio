import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SkillItem } from '../../models/skill-item.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillApi {
  private http = inject(HttpClient)
  private readonly BASE_PATH = 'data/';

  async getSkill(json: string): Promise<SkillItem[]> {
    try {
      return await firstValueFrom(this.http.get<SkillItem[]>(this.BASE_PATH + json));
    } catch (error) {
      throw new Error('Skill not found');
    }
  }
}
