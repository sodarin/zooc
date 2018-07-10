export class ElaborateCourse {
  constructor(
    public courseId: string,
    public url: string,
    public title: string,
    public price: number,
    public stage: string,
    public studentNum: number
  ){}
}
