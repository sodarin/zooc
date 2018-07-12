import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lecturer-item',
  templateUrl: './lecturer-item.component.html',
  styleUrls: ['./lecturer-item.component.css']
})
export class LecturerItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
