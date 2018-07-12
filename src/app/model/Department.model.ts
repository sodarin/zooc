export class Branch {
  constructor(
    public branchId: string,
    public enterpriseId: string,
    public name: string,
    public address: string,
    public latitude: number,
    public longitude: number,
    public telephone: string
  ){}
}
