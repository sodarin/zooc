import {OrderEnum} from './enum/OrderEnum';

export class Order {
  constructor(
    public orderId: string,
    public userId: string,
    public courseId: string,
    public time: string,
    public status: OrderEnum
  ){}
}
