import { Injectable } from '@angular/core';
import {Order} from '../../model/Order.model';
import {OrderEnum} from '../../model/enum/OrderEnum';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order[] = [
    new Order('158911520', '1', '1', '2018-6-25 11:11:50', OrderEnum.PENDING),
    new Order('158911520', '1', '2', '2018-6-25 11:11:50', OrderEnum.CANCELED),
    new Order('158911520', '3', '1', '2018-6-25 11:11:50', OrderEnum.AVAILABLE),
    new Order('158911520', '1', '3', '2018-6-25 11:11:50', OrderEnum.REFUNDED),
    new Order('158911520', '1', '3', '2018-6-25 11:11:50', OrderEnum.REFUND_REQUESTED),
    new Order('158911520', '1', '1', '2018-6-25 11:11:50', OrderEnum.AVAILABLE),
  ];

  constructor() { }

  getOrderById(userId: string): Order[] {
    return this.order.filter(order => order.userId == userId);
  }
}
