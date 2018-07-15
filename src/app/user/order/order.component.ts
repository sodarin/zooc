import { Component, OnInit } from '@angular/core';
import {OrderDetail, OrderService} from '../../service/order/order.service';
import {LoginService} from '../../service/login/login.service';
import {OrderStatusEnum} from '../../model/enum/OrderStatusEnum';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: OrderDetail[];

  pendingOrders: OrderDetail[];
  availableOrders: OrderDetail[];
  refundRequestedOrders: OrderDetail[];
  afterSaleOrders: OrderDetail[];

  constructor(private orderService$: OrderService, private login: LoginService) { }

  ngOnInit() {

    this.orderService$.getHistory(+this.login.resultUser.userId)
      .subscribe(result => {
        this.orders = result.list;
        this.pendingOrders = this.orders.filter(order => order.status == OrderStatusEnum[OrderStatusEnum.PENDING]);
        this.availableOrders = this.orders.filter(order => order.status == OrderStatusEnum[OrderStatusEnum.AVAILABLE]);
        this.refundRequestedOrders = this.orders.filter(order => order.status == OrderStatusEnum[OrderStatusEnum.REFUND_REQUESTED]);
        this.afterSaleOrders = this.orders.filter(order => order.status == OrderStatusEnum[OrderStatusEnum.REFUNDED] || order.status == OrderStatusEnum[OrderStatusEnum.CANCELED]);
      })

  }

}
