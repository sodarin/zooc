import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elaborate-course-item',
  templateUrl: './elaborate-course-item.component.html',
  styleUrls: ['./elaborate-course-item.component.css']
})
export class ElaborateCourseItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
