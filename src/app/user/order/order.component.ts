import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/Order.model';
import {OrderDetail, OrderService} from '../../service/order/order.service';
import {LoginService} from '../../service/login/login.service';
import {OrderEnum} from '../../model/enum/OrderEnum';


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

  constructor(private orderService: OrderService, private login: LoginService) { }

  ngOnInit() {
    this.orderService.getOrderByUserId(this.login.resultUser.userId)
      .subscribe(result => {
        this.orders = result.list;
        this.pendingOrders = this.orders.filter(order => order.status == OrderEnum[OrderEnum.PENDING]);
        this.availableOrders = this.orders.filter(order => order.status == OrderEnum[OrderEnum.AVAILABLE]);
        this.refundRequestedOrders = this.orders.filter(order => order.status == OrderEnum[OrderEnum.REFUND_REQUESTED]);
        this.afterSaleOrders = this.orders.filter(order => order.status == OrderEnum[OrderEnum.REFUNDED] || order.status == OrderEnum[OrderEnum.CANCELED]);
      })

  }

}
