import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/Order.model';
import {OrderService} from '../../service/order/order.service';
import {LoginService} from '../../service/login/login.service';
import {OrderEnum} from '../../model/enum/OrderEnum';


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

  constructor(private orderService: OrderService, private login: LoginService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrderById(this.login.resultUser.userId);
    this.pendingOrders = this.orders.filter(order => order.status == OrderEnum.PENDING);
    this.availableOrders = this.orders.filter(order => order.status == OrderEnum.AVAILABLE);
    this.afterSaleOrders = this.orders.filter(order => order.status != OrderEnum.AVAILABLE && order.status != OrderEnum.PENDING);
  }

}
