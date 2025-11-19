import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectApi {
  private http = inject(HttpClient);
  private readonly BASE_PATH = 'data/';

  async getProjects(json: string): Promise<Project[]> {
    try {
      return await firstValueFrom(this.http.get<Project[]>(this.BASE_PATH + json));
    } catch (error) {
      throw new Error('Project not found');
    }
  }
}
