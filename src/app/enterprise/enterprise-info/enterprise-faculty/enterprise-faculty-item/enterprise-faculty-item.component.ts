import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-enterprise-faculty-item',
  templateUrl: './enterprise-faculty-item.component.html',
  styleUrls: ['./enterprise-faculty-item.component.css']
})
export class EnterpriseFacultyItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
