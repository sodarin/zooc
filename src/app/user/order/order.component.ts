import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/Order';
import {OrderService} from '../../service/order/order.service';
import {LoginService} from '../../service/login/login.service';
import {OrderStatusEnum} from '../../model/enum/OrderStatusEnum';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];

  pendingOrders: Order[];
  availableOrders: Order[];
  afterSaleOrders: Order[];

  constructor(private orderService$: OrderService, private login: LoginService) { }

  ngOnInit() {
    this.orderService$.getHistory(+this.login.resultUser.userId).subscribe(listResultOfOrders => {
      this.orders = listResultOfOrders.list;
    });
    this.pendingOrders = this.orders.filter(order => order.status == OrderStatusEnum.PENDING);
    this.availableOrders = this.orders.filter(order => order.status == OrderStatusEnum.AVAILABLE);
    this.afterSaleOrders = this.orders.filter(order => order.status != OrderStatusEnum.AVAILABLE && order.status != OrderStatusEnum.PENDING);
  }

}
