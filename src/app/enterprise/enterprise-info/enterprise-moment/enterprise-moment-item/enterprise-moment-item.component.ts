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

  like = false;
  likeNum: number;
  momentComment: MomentComment[];
  latestComment: MomentComment[];
  momentCommentLength: number;
  constructor(private momentService$: MomentService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.likeNum = this.momentService$.getMomentLikeNum(this.moment.momentId);
    this.momentComment = this.momentService$.getMomentCommentByMomentId(this.moment.momentId).reverse();
    this.momentCommentLength = this.momentComment.length;
    this.latestComment = this.momentComment.slice(0, 3)
  }

  operateFavorite() {
    this.like = !this.like;
    if (this.like)
      this.likeNum++;
    else
      this.likeNum--;
  }

  openFullComment() {
    const bottomSheet = this.bottomSheet.open(EnterpriseFullMomentCommentComponent, {
      data: this.momentComment
    });
    bottomSheet.afterDismissed().subscribe(result => {
      if(result != null){
        this.momentComment.unshift(result);
        this.latestComment = this.momentComment.slice(0, 3);
      }

    })
  }

}
