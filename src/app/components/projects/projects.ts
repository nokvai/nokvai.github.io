import { Component } from '@angular/core';
import { featuredProjects, projects, otherProjects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly featuredProjects = featuredProjects;
  protected readonly projects = projects;
  protected readonly otherProjects = otherProjects;
}
