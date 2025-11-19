import { Component, inject } from '@angular/core';
import { ProjectStore } from '../../services/project.store';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'app-project-container',
  imports: [ProjectCard],
  templateUrl: './project-container.html',
  styleUrl: './project-container.scss',
})
export class ProjectContainer {
  projectStore = inject(ProjectStore);

  projects = this.projectStore.projects;
}
