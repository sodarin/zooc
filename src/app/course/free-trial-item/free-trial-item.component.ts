import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-trial-item',
  templateUrl: './free-trial-item.component.html',
  styleUrls: ['./free-trial-item.component.css']
})
export class FreeTrialItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
