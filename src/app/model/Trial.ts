import { TrialStatusEnum } from './enum/TrialStatusEnum';

export class Trial {
  constructor(
    public trialId: number,
    public name: string,
    public detail: string,
    public imgUrl: string,
    public categoryId: number,
    public categoryName: string,
    public enterpriseId: number,
    public enterpriseName: string,
    public branchId: number,
    public branchName: string,
    public lecturerId: number,
    public lecturerName: string,
    public releaseTime: Date,
    public status: TrialStatusEnum
  ) {}
}
