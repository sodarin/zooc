import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MomentService} from '../../../../service/moment/moment.service';
import {MomentComment} from '../../../../model/MomentComment.model';
import {MatBottomSheet} from '@angular/material';
import {EnterpriseFullMomentCommentComponent} from '../enterprise-full-moment-comment/enterprise-full-moment-comment.component';
import {EnterpriseMomentCommentItemComponent} from '../enterprise-moment-comment-item/enterprise-moment-comment-item.component';

@Component({
  selector: 'app-enterprise-moment-item',
  templateUrl: './enterprise-moment-item.component.html',
  styleUrls: ['./enterprise-moment-item.component.css']
})
export class EnterpriseMomentItemComponent implements OnInit {

  @Input() moment;
  @Input() enterprise;


  @ViewChildren(EnterpriseMomentCommentItemComponent) commentsComponent: QueryList<EnterpriseMomentCommentItemComponent>;


  constructor(private momentService$: MomentService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    console.log(this.moment);
  }

  operateFavorite() {

  }

  openFullComment() {

  }

}
