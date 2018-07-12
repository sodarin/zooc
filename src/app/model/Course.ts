import { CourseStatusEnum } from './enum/CourseStatusEnum';

export class Course {
  constructor(
    public courseId: number,
    public name: string,
    public detail: string,
    public imgUrl: string,
    public categoryId: number,
    public categoryName: string,
    public releaseTime: Date,
    public price: number,
    public status: CourseStatusEnum
  ) {}
}
