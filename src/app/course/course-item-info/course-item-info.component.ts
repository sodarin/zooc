import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/course/course.service';
import { Course } from '../../model/Course';
import { CourseOffering } from '../../model/CourseOffering';
import { Branch } from '../../model/Branch';
import { CourseOfferingService } from '../../service/course-offering/course-offering.service';
import { BranchService } from '../../service/branch/branch.service';
import { LoginService } from '../../service/login/login.service';
import { MatBottomSheet, MatSnackBar } from '@angular/material';
import { PurchaseConfirmationDialogComponent } from './purchase-confirmation-dialog/purchase-confirmation-dialog.component';
import { OrderService } from '../../service/order/order.service';
import { Order } from '../../model/Order';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';

@Component({
  selector: 'app-course-item-info',
  templateUrl: './course-item-info.component.html',
  styleUrls: ['./course-item-info.component.scss']
})
export class CourseItemInfoComponent implements OnInit {
  orderStatusEnum = OrderStatusEnum;

  activeUserId: number;
  item: Course;
  offerings: CourseOffering[];
  branches: { [key: number]: Branch } = { };
  order: Order;

  constructor(private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet,
              private router: Router,
              private routeInfo: ActivatedRoute,
              private loginService$: LoginService,
              private courseService$: CourseService,
              private courseOfferingService$: CourseOfferingService,
              private branchService$: BranchService,
              private orderService$: OrderService) { }

  ngOnInit() {
    // Get the course info
    this.activeUserId = this.loginService$.resultUser ? +this.loginService$.resultUser.userId : null;
    console.log(this.loginService$.resultUser);
    this.courseService$.getDetailById(this.routeInfo.snapshot.params['id']).subscribe(course => {
      this.item = course;
      // Get the offerings
      this.courseOfferingService$.getAll(this.item.courseId).subscribe(listResultOfOfferings => {
        this.offerings = listResultOfOfferings.list;
      });
      // Get the order info
      if (!this.activeUserId) {
        console.log('User not logged in.');
      } else {
        this.orderService$.getHistory(this.activeUserId, this.item.courseId).subscribe(listResultOfOrders => {
          this.order = listResultOfOrders.list[0];
          console.log(this.order);
        });
      }
    });
  }

  getBranchDetailIfNotDone(branchId: number) {
    if (this.branches[branchId]) {
      return;
    }
    this.branchService$.getId(branchId).subscribe(branch => {
      this.branches[branchId] = branch;
    });
  }

  purchase(event: Event) {
    event.stopPropagation();
    this.activeUserId = this.loginService$.resultUser ? +this.loginService$.resultUser.userId : null;
    if (this.activeUserId) {
      // Logged in
      // Purchase confirmation
      const bottomSheet = this.bottomSheet.open(PurchaseConfirmationDialogComponent, {
        data: { userId: this.activeUserId, course: this.item }
      });
      bottomSheet.afterDismissed().subscribe((order: Order) => {
        // Update the order
        if (order) {
          this.order = order;
          this.snackBar.open("订单支付成功！", null, {
            duration: 2000
          });
        }
      });
    } else {
      // Not logged in
      this.snackBar.open('请先登录！', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/login');
    }
  }

}
