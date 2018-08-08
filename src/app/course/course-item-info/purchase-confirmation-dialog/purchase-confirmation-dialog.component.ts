import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { ReservationMessageComponent } from '../../trial-item-info/reservation-message/reservation-message.component';
import { OrderService } from '../../../service/order/order.service';
import { OrderPreview } from '../../../model/OrderPreview';
import { Coupon } from '../../../model/Coupon';
import { CouponService } from '../../../service/coupon/coupon.service';
import { Course } from '../../../model/Course';

@Component({
  selector: 'app-purchase-confirmation-dialog',
  templateUrl: './purchase-confirmation-dialog.component.html',
  styleUrls: ['./purchase-confirmation-dialog.component.scss']
})
export class PurchaseConfirmationDialogComponent implements OnInit {

  userId: number;
  course: Course;
  orderPreview: OrderPreview;
  isOrderPreviewPending: boolean;
  availableCoupons: Coupon[];
  selectedCoupon: Coupon;
  usePoints: boolean;
  isConfirmed = false;
  order: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<ReservationMessageComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data,
              private orderService$: OrderService,
              private couponService$: CouponService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.userId = this.data.userId;
    this.course = this.data.course;
    this.preview();
    // TODO: The enterprise ID is hard-coded
    this.couponService$.getUserAvailable(1, this.userId, this.course.price).subscribe(it => {
      this.availableCoupons = it;
    });
  }

  preview() {
    this.isOrderPreviewPending = true;
    const couponId = this.selectedCoupon ? this.selectedCoupon.couponId : null;
    this.orderService$.getOrderPreview(this.course.courseId, this.userId, couponId, this.usePoints)
      .subscribe(orderPreview => {
        this.orderPreview = orderPreview;
        this.isOrderPreviewPending = false;
        this.changeDetector.markForCheck();
      });
  }

  close() {
    console.log("close");
    this.bottomSheetRef.dismiss();
  }

  confirmPurchase() {
    this.orderService$.create(this.course.courseId, this.userId, this.selectedCoupon.couponId, this.usePoints).subscribe( orderId => {
      this.orderService$.getDetailById(orderId).subscribe(order => {
        this.order = order;
        this.isConfirmed = true;
        this.bottomSheetRef.dismiss(this.order);
      })
    })

  }

  nextField() {
    document.getElementById('pay-button').style.display = 'none';
  }

  previousPage() {
    document.getElementById('pay-button').style.display = 'block'
  }

  selectCoupon(coupon: Coupon) {
    this.selectedCoupon = coupon;
    document.getElementById('previous-button').click();
    this.preview();
  }

  enterNextPage() {
    document.getElementById('next-button').click();
  }
}
