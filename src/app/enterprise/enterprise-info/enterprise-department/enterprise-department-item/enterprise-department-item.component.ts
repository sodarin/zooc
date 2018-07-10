import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-enterprise-department-item',
  templateUrl: './enterprise-department-item.component.html',
  styleUrls: ['./enterprise-department-item.component.css']
})
export class EnterpriseDepartmentItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
