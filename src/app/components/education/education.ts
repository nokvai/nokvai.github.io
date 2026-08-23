import { Component } from '@angular/core';
import { education } from '../../data/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly education = education;
}
