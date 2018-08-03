import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MomentService} from '../../../../service/moment/moment.service';
import {MomentComment} from '../../../../model/MomentComment.model';
import {MatBottomSheet, MatSnackBar} from '@angular/material';
import {EnterpriseFullMomentCommentComponent} from '../enterprise-full-moment-comment/enterprise-full-moment-comment.component';
import {EnterpriseMomentCommentItemComponent} from '../enterprise-moment-comment-item/enterprise-moment-comment-item.component';
import {LoginService} from '../../../../service/login/login.service';
import {Router} from '@angular/router';
import {ReservationMessageComponent} from '../../../../course/trial-item-info/reservation-message/reservation-message.component';
import {EnterpriseSendCommentComponent} from '../enterprise-send-comment/enterprise-send-comment.component';

@Component({
  selector: 'app-enterprise-moment-item',
  templateUrl: './enterprise-moment-item.component.html',
  styleUrls: ['./enterprise-moment-item.component.css']
})
export class EnterpriseMomentItemComponent implements OnInit {

  @Input() moment;
  @Input() enterprise;

  commentTotalAmount = 0;


  @ViewChildren(EnterpriseMomentCommentItemComponent) commentsComponent: QueryList<EnterpriseMomentCommentItemComponent>;


  constructor(private momentService$: MomentService,
              private bottomSheet: MatBottomSheet,
              private loginService$: LoginService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.getComment(this.moment.momentId);
  }

  getComment(momentId: number) {
    this.momentService$.getMomentCommentList(momentId, true, 1, 5).subscribe( result => {
      if (result.list == null || result.list.length == 0) {
        this.moment.commentList = [];
      } else {
        this.moment.commentList = result.list;
        this.commentTotalAmount = result.total;
      }
    })
  }

  operateFavorite() {
    if (this.loginService$.resultUser) {
      if (this.moment.hasLiked) {
        this.momentService$.unlikeAMoment(this.moment.momentId, this.loginService$.resultUser.userId).subscribe( result => {
          this.snackBar.open('取消点赞成功', null, {
            duration: 2000
          });
          this.moment.hasLiked = !this.moment.hasLiked;
          this.moment.likeNum--;
          this.momentService$.getMomentLatestLikeLikst(this.moment.momentId, 3).subscribe(result => {
            this.moment.likeLatest = result;
          });
        }, error2 => {
          this.snackBar.open(error2.error, null, {
            duration: 2000
          })
        })
      } else {
        this.momentService$.likeAMoment(this.moment.momentId, this.loginService$.resultUser.userId).subscribe( result => {
          this.snackBar.open('点赞成功', null, {
            duration: 2000
          });
          this.moment.hasLiked = !this.moment.hasLiked;
          this.moment.likeNum++;
          this.momentService$.getMomentLatestLikeLikst(this.moment.momentId, 3).subscribe(result => {
            this.moment.likeLatest = result;
          })
        }, error2 => {
          this.snackBar.open(error2.error, null, {
            duration: 2000
          })
        })
      }
    } else {
      this.snackBar.open('请先登录', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/login');
    }
  }

  openFullComment() {

  }

  editComment() {
    if (this.loginService$.resultUser) {
      const bottomSheet = this.bottomSheet.open(EnterpriseSendCommentComponent);
      bottomSheet.afterDismissed().subscribe(result => {
        if (result != null) {
          this.momentService$.postComment(this.moment.momentId, this.loginService$.resultUser.userId, result).subscribe( next => {
            this.getComment(this.moment.momentId);
            this.snackBar.open('评论成功', null, {
              duration: 2000
            })
          }, error2 => {
            this.snackBar.open(error2.error, null, {
              duration: 2000
            })
          })
        }
      })
    } else {
      this.snackBar.open('请先登录！', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/login');
    }
  }

}
