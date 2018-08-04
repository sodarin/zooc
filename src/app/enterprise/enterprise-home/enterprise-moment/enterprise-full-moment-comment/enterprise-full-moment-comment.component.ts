import {Component, Inject, OnInit} from '@angular/core';
import {ErrorStateMatcher, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef, MatSnackBar} from '@angular/material';
import {MomentComment} from '../../../../model/MomentComment.model';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DateFormatService} from '../../../../service/date-format/date-format.service';
import {MomentService} from '../../../../service/moment/moment.service';
import {LoginService} from '../../../../service/login/login.service';
import {Router} from '@angular/router';
declare var MeScroll: any;

@Component({
  selector: 'app-enterprise-full-moment-comment',
  templateUrl: './enterprise-full-moment-comment.component.html',
  styleUrls: ['./enterprise-full-moment-comment.component.css']
})
export class EnterpriseFullMomentCommentComponent implements OnInit {

  commentList: MomentComment[];

  public mescroll;

  targetPage: number = 1;
  totalSize: number;
  currentPageSize: number;

  commentGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private dateFormat: DateFormatService,
              private fb: FormBuilder,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
              private bottomSheetRef: MatBottomSheetRef<EnterpriseFullMomentCommentComponent>,
              private momentService$: MomentService,
              private loginService$: LoginService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.initMeScroll();
    this.commentGroup = this.fb.group({
      comment: ['', [Validators.required]]
    })
  }

  getCommentWithPagination(targetPage: number) {
    let element: HTMLElement = document.getElementById('comment') as HTMLElement;
    this.momentService$.getMomentCommentList(this.data.momentId, true, targetPage, 5).subscribe( result => {
      if (targetPage == 1) {
        this.commentList = [];
      }
      this.totalSize = result.total;
      this.currentPageSize = result.list.length;
      console.log(result.list.length);
      console.log(this.totalSize);
      this.commentList.push(...result.list);
      this.mescroll.endBySize(this.currentPageSize, this.totalSize);
      this.targetPage++;
      element.click();
    }, error2 =>  {
      this.mescroll.endErr();
    })
  }

  initMeScroll() {
    this.mescroll = new MeScroll("commentScroll", {
      down: {
        use: true,
        auto: false,
        page: {
          num: 0,
          size: 5
        },
        offset: 10,
        callback: this.refresh
      },
      up: {
        use: true,
        auto: true,
        page: {
          num: 0,
          size: 5
        },
        offset: 10,
        callback: this.loadMore
      }
    });
  }

  refresh = () => {
    this.targetPage = 1;
    this.mescroll.resetUpScroll(true);
  };

  loadMore = () => {
    this.getCommentWithPagination(this.targetPage);
  };

  close() {
    this.bottomSheetRef.dismiss();
  }

  sendComment() {
    if (this.loginService$.resultUser) {
      this.momentService$.postComment(this.data.momentId, this.loginService$.resultUser.userId, this.commentGroup.value.comment).subscribe( result => {
        this.commentGroup.controls.comment.setValue('');
        this.getCommentWithPagination(1);
        this.snackBar.open('评论成功', null, {
          duration: 2000
        })
      }, error2 => {
        this.snackBar.open(error2.error, null, {
          duration: 2000
        });
      })
    } else {
      this.snackBar.open('请先登录', null, {
        duration: 2000
      });
      this.bottomSheetRef.dismiss();
      this.router.navigateByUrl('/login');
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
