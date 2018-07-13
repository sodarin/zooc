import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial-item',
  templateUrl: './trial-item.component.html',
  styleUrls: ['./trial-item.component.css']
})
export class TrialItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
