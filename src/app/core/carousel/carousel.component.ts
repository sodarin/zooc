import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  pictures = [
    {'src': '../../../assets/img/carousel/5afcec3a0001528009360316.jpg'},
    {'src': '../../../assets/img/carousel/5b1e47160001d8a918720632.jpg'},
    {'src': '../../../assets/img/carousel/5b2b81bb00016aee18720632.jpg'},
    {'src': '../../../assets/img/carousel/5b174e000001db4809360316.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
