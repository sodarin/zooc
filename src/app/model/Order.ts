import { OrderStatusEnum } from './enum/OrderStatusEnum';

export class Order {
  constructor(
    public orderId: number,
    public userId: number,
    public username: string,
    public userEmail: string,
    public userMobile: string,
    public enterpriseId: number,
    public courseId: string,
    public courseName: string,
    public coursePrice: number,
    public time: Date,
    public status: OrderStatusEnum,
    public refundId?: number,
    public refundTime?: Date,
    public refundReason?: string
  ) {}
}
