import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../service/order/order.service';
import { LoginService } from '../../service/login/login.service';
import { OrderStatusEnum } from '../../model/enum/OrderStatusEnum';
import { Order } from '../../model/Order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(private orderService$: OrderService, private loginService$: LoginService) { }

  currentCategoryStr = OrderCategoryEnum[OrderCategoryEnum.ALL];

  userId: number;

  orders: Order[];
  pendingOrders: Order[];
  availableOrders: Order[];
  refundRequestedOrders: Order[];
  inactiveOrders: Order[];

  ngOnInit() {
    this.userId = +this.loginService$.resultUser.userId;
    this.getOrders(this.currentCategoryStr);
  }

  switchTo(event: any) {
    this.currentCategoryStr = OrderCategoryEnum[event].toString();
    this.refresh();
  }

  refresh() {
    this.getOrders(this.currentCategoryStr);
  }

   private getOrders(categoryStr: string) {
    switch (categoryStr) {
      case OrderCategoryEnum[OrderCategoryEnum.ALL]: {
        this.orderService$.getHistory(this.userId).subscribe(listResult => {
          this.orders = listResult.list;
        });
        break;
      }
      case OrderCategoryEnum[OrderCategoryEnum.AVAILABLE]: {
        this.orderService$.getHistory(this.userId, null, 'react', null, OrderStatusEnum[OrderStatusEnum.AVAILABLE]).subscribe(listResult => {
          this.availableOrders = listResult.list;
        });
        break;
      }
      case OrderCategoryEnum[OrderCategoryEnum.PENDING]: {
        this.orderService$.getHistory(this.userId, null, 'react', null, OrderStatusEnum[OrderStatusEnum.PENDING]).subscribe(listResult => {
          this.pendingOrders = listResult.list;
        });
        break;
      }
      case OrderCategoryEnum[OrderCategoryEnum.REFUND_REQUESTED]: {
        this.orderService$.getHistory(this.userId, null, null, null, OrderStatusEnum[OrderStatusEnum.REFUND_REQUESTED]).subscribe(listResult => {
          this.refundRequestedOrders = listResult.list;
        });
        break;
      }
      case OrderCategoryEnum[OrderCategoryEnum.INACTIVE]: {
        this.orderService$.getHistory(this.userId, null, null, null, OrderStatusEnum[OrderStatusEnum.REFUNDED]).subscribe(listResult1 => {
          this.inactiveOrders = listResult1.list;
          this.orderService$.getHistory(this.userId, null, null, null, OrderStatusEnum[OrderStatusEnum.CANCELED]).subscribe(listResult2 => {
            this.inactiveOrders += listResult2.list;
          });
        });
        break;
      }
    }
  }
}

enum OrderCategoryEnum {
  ALL,
  PENDING,
  AVAILABLE,
  REFUND_REQUESTED,
  INACTIVE
}
