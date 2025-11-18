import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceApi {
  private http = inject(HttpClient);
  private readonly BASE_PATH = 'data/';

  async getExperience(json: string): Promise<ExperienceItem[]> {
    try {
      return await firstValueFrom(this.http.get<ExperienceItem[]>(this.BASE_PATH + json));
    } catch (error) {
      throw new Error('Experience not found');
    }
  }
}
