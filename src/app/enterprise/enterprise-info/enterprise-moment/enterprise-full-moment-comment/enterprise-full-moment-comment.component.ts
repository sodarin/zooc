import {Component, Inject, OnInit} from '@angular/core';
import {ErrorStateMatcher, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {MomentComment} from '../../../../model/MomentComment.model';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DateFormatService} from '../../../../service/date-format/date-format.service';

@Component({
  selector: 'app-enterprise-full-moment-comment',
  templateUrl: './enterprise-full-moment-comment.component.html',
  styleUrls: ['./enterprise-full-moment-comment.component.css']
})
export class EnterpriseFullMomentCommentComponent implements OnInit {

  fullComment: MomentComment[];

  commentGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private dateFormat: DateFormatService, private fb: FormBuilder, @Inject(MAT_BOTTOM_SHEET_DATA) private data: any, private bottomSheetRef: MatBottomSheetRef<EnterpriseFullMomentCommentComponent>) { }

  ngOnInit() {
    this.fullComment = this.data;
    this.commentGroup = this.fb.group({
      comment: ['', [Validators.required]]
    })
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  sendComment() {
    let newComment = new MomentComment(`${this.fullComment.length+1}`, this.fullComment[0].momentId, '1', this.commentGroup.value.comment, this.dateFormat.dateFormat(new Date()));
    this.bottomSheetRef.dismiss(newComment);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
