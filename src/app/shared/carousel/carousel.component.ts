import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ICaraouselData } from '../../utils/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
  @Input('dataList') carouselData!: ICaraouselData[];

  // if true, change slide for time interval
  @Input() autoPlayOn: boolean = true;

  //interval time to changes slides in mili second
  @Input() intervalTime: number = 2000;

  // if true pause slide show on mouse hover
  @Input() enablePauseOnHover: boolean = false; 

  pauseOnHover: boolean = false;
  currentSlide: number = 0;
  carouselLength!: number;

  constructor(){}

  ngOnInit(): void {
    this.carouselLength = this.carouselData.length;

    if(this.autoPlayOn) {
      this.autoPlayStart();
    }
  }

  @HostListener('mouseover') onMouseHover(){
    this.pauseOnHover = true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.pauseOnHover = false;
  }

  autoPlayStart() {
    setInterval(() =>this.goToNextSlide(), this.intervalTime);
  }

  goToNextSlide() {
    if(this.enablePauseOnHover && this.pauseOnHover) return
    this.currentSlide = this.currentSlide === (this.carouselLength - 1) ? 0 : this.currentSlide + 1;
  }
}
