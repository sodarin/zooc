export class CourseOffering {
  constructor(
    public courseOfferingId: number,
    public branchId: number,
    public branchName: string,
    public lecturerId: number,
    public lecturerName: string
  ) {}
}
