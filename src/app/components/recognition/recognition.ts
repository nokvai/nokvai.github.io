import { Component } from '@angular/core';
import { awards, certifications } from '../../data/recognition.data';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.html',
  styleUrl: './recognition.scss',
})
export class Recognition {
  protected readonly awards = awards;
  protected readonly certifications = certifications;
}
