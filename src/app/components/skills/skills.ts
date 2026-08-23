import { Component } from '@angular/core';
import { skills } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = skills;
}
