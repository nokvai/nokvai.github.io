import { Component } from '@angular/core';
import { profile } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = profile;
}
