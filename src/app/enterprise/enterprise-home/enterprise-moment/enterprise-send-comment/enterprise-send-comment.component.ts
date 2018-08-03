import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-enterprise-send-comment',
  templateUrl: './enterprise-send-comment.component.html',
  styleUrls: ['./enterprise-send-comment.component.css']
})
export class EnterpriseSendCommentComponent implements OnInit {

  comment: string = '';

  constructor(private bottomSheetRef: MatBottomSheetRef<EnterpriseSendCommentComponent>) { }

  ngOnInit() {
  }

  sendComment() {
    this.bottomSheetRef.dismiss(this.comment);
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

}
