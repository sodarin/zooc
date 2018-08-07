export class OrderPreview {
  constructor(
    public enterpriseId: number,
    public userId: number,
    public courseId: number,
    public courseName: string,
    public originalPrice: number,
    public couponId: number,
    public discountedByCoupon: number,
    public totalPoints: number,
    public numPointsUsed: number,
    public discountedByPoints: number,
    public actualPayment: number
  ) {
  }
}
