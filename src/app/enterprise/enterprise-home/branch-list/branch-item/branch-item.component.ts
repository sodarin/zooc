import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
