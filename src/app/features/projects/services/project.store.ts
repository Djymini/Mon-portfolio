import { computed, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectStore {
  private projectsSignal = signal<Project[]>([]);

  projects = computed(() => this.projectsSignal());

  loadProject(newProjectArray: Project[]) {
    this.projectsSignal.set(newProjectArray);
  }
}
