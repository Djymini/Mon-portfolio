import { inject, Injectable } from '@angular/core';
import { ProjectStore } from './project.store';
import { ProjectApi } from './project.api';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacade {
  projectStore = inject(ProjectStore);
  projectApi = inject(ProjectApi);

  async loadExperience() {
    const experience = await this.projectApi.getProjects('project-name.json');
    this.projectStore.loadProject(experience);
  }
}
