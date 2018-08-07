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
    const couponId = this.selectedCoupon ? this.selectedCoupon.couponId : null;
    this.orderService$.getOrderPreview(this.course.courseId, this.userId, couponId, this.usePoints)
      .subscribe(orderPreview => {
        this.orderPreview = orderPreview;
        this.changeDetector.markForCheck();
      });
  }

  close() {
    console.log("close");
    // console.log(this.order);
    // if (!this.order || this.order.status.toString() === OrderStatusEnum[OrderStatusEnum.CANCELED]) {
    //   // If there's not an order, place an order with the status of PENDING
    //   // If there's already an order, it can only be canceled/pending.
    //   // Place a new order if it's canceled
    //   if (!this.order) {
    //     console.log("没有订单");
    //   } else {
    //     console.log("canceled");
    //   }
    //   const orderId = await this.orderService$.createAsync(this.course.courseId, this.userId);
    //   console.log("创建了订单。");
    //   this.order = await this.orderService$.getDetailByIdAsync(orderId);
    //   console.log(this.order);
    //   this.bottomSheetRef.dismiss(this.order);
    // } else {
    //   // Ignore it if it's pending
    //   console.log("pending");
    //   this.bottomSheetRef.dismiss(this.order);
    // }
    this.bottomSheetRef.dismiss();
  }

  confirmPurchase() {
    // if (!this.order || this.order.status.toString() === OrderStatusEnum[OrderStatusEnum.CANCELED]) {
    //   // If there's not an order, place an order with the status of AVAILABLE
    //   // If there's an order, it can only be canceled/pending
    //   // Place a new order and set it AVAILABLE if it's canceled
    //   if (!this.order) {
    //     console.log("没有订单");
    //   } else {
    //     console.log("canceled");
    //   }
    //   this.orderService$.create(this.course.courseId, this.userId).subscribe(orderId => {
    //     this.orderService$.update(orderId, OrderStatusEnum.AVAILABLE).subscribe(() => {
    //       this.orderService$.getDetailById(orderId).subscribe(order => {
    //         this.order = order;
    //         this.isConfirmed = true;
    //         this.bottomSheetRef.dismiss(this.order);
    //       });
    //     });
    //   });
    // } else {
    //   // If the order is PENDING, set it to AVAILABLE
    //   console.log("pending");
    //   this.orderService$.update(this.order.orderId, OrderStatusEnum.AVAILABLE).subscribe(() => {
    //     this.orderService$.getDetailById(this.order.orderId).subscribe(order => {
    //       this.order = order;
    //       this.isConfirmed = true;
    //       this.bottomSheetRef.dismiss(this.order);
    //     });
    //   });
    // }
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
