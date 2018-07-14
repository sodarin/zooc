import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reservation-message',
  templateUrl: './reservation-message.component.html',
  styleUrls: ['./reservation-message.component.css']
})
export class ReservationMessageComponent implements OnInit {

  message = '';

  messageForm: FormGroup;

  constructor(private bottomSheetRef: MatBottomSheetRef<ReservationMessageComponent>,
              private fb: FormBuilder,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any) { }

  ngOnInit() {
    this.message = this.data;
    this.messageForm = this.fb.group({
      message: [this.message]
    });
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  sendMessage() {
    this.bottomSheetRef.dismiss(this.message);
  }

}
