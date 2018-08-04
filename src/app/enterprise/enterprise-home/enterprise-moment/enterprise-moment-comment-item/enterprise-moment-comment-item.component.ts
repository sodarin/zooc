import {Component, Input,  OnInit} from '@angular/core';

@Component({
  selector: 'app-enterprise-moment-comment-item',
  templateUrl: './enterprise-moment-comment-item.component.html',
  styleUrls: ['./enterprise-moment-comment-item.component.css']
})
export class EnterpriseMomentCommentItemComponent implements OnInit {

  @Input() comment;

  constructor() { }

  ngOnInit() {

  }

}
