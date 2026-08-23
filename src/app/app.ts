import { Component } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Skills, Experience, Projects, Education, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
