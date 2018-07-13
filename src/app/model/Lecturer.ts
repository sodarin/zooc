export class Lecturer {
  constructor(
    public lecturerId: number,
    public enterpriseId: number,
    public name: string,
    public photoUrl: string,
    public introduction: string,
    public isDisabled: boolean
  ) {}
}
