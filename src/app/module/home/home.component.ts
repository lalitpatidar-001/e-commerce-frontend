import { Component } from '@angular/core';
import { mainCarouselData } from '../../../data/carousel-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselData = mainCarouselData;
}
