import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reservation-message',
  templateUrl: './reservation-message.component.html',
  styleUrls: ['./reservation-message.component.css']
})
export class ReservationMessageComponent implements OnInit, OnDestroy {

  message = '';

  messageForm: FormGroup;

  constructor(//以自身组件作为bottom sheet模板
              private bottomSheetRef: MatBottomSheetRef<ReservationMessageComponent>,
              private fb: FormBuilder,
              //注入父组件传入的数据
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any) { }

  ngOnInit() {
    this.message = this.data;
    //生成表单控件
    this.messageForm = this.fb.group({
      message: [this.message]
    });
  }

  //用其他方法关闭模态框时不发送数据
  close() {
    this.bottomSheetRef.dismiss();
  }

  //点击发送按钮关闭模态框时发送数据
  sendMessage() {
    this.bottomSheetRef.dismiss(this.message);
  }

  ngOnDestroy () {
    this.bottomSheetRef.dismiss("销毁")
  }

}
