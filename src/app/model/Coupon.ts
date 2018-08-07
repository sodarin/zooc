import { CouponStatusEnum } from './enum/CouponStatusEnum';

export class Coupon {
  constructor(
    public couponId: number,
    public enterpriseId: number,
    public value: number,
    public threshold: number,
    public time: Date,
    public status: CouponStatusEnum
  ) {}
}
