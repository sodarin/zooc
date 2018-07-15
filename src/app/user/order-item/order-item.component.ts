import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course/course.service';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';
import {OrderService} from '../../service/order/order.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit, OnChanges {

  @Input() item;
  @Output() statusChangeEvent = new EventEmitter<any>();

  elaborateCourse: Course;
  orderEnum = OrderStatusEnum;

  constructor(private orderService$: OrderService,
              private elaborateCourseService$: CourseService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {}

  ngOnChanges() {
    this.elaborateCourseService$.getDetailById(this.item.courseId)
      .subscribe(result => {
        this.elaborateCourse = result;
      })
  }

  changeStatus(status: string) {
    this.orderService$.update(this.item.orderId, this.orderEnum[status])
      .subscribe(result => {
        this.item.status = status;
        this.snackBar.open(`${status == 'REFUND_REQUESTED'? '退款': (status == 'AVAILABLE'? '支付': '取消')}成功`, null, {
          duration: 2000
        });
        this.statusChangeEvent.emit();
      }, error2 => {
        this.snackBar.open(error2.error);
      })
  }

}
