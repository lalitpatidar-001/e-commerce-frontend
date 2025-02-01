import { IProduct } from './../../utils/types';
import { Component } from '@angular/core';
import { mainCarouselData } from '../../../data/carousel-data';
import { mensJeansData } from '../../../data/Men/men_jeans';
import { lengha_page1 } from '../../../data/Women/LenghaCholi';
import { gounsPage1 } from '../../../data/Gouns/gouns';
import { womentTop } from '../../../data/Women/women_top';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselData = mainCarouselData;
  products: IProduct[] = mainCarouselData as any;

  mensJeansData: [] = mensJeansData.slice(0,10) as [];
  womenGouns: [] = gounsPage1.slice(0,10) as [];
  lehngaCholi: [] = lengha_page1.slice(0,10) as [];
  womentTop: [] = womentTop.slice(0,10) as [];
}
