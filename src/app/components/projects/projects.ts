import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { featuredProjects, latestProjects, otherProjects, projects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [DatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly latestProjects = latestProjects;
  protected readonly featuredProjects = featuredProjects;
  protected readonly projects = projects;
  protected readonly otherProjects = otherProjects;
}
