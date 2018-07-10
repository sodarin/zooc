export class MomentComment {
  constructor(
    public momentCommentId: string,
    public momentId: string,
    public userId: string,
    public content: string,
    public time: string
  ){}
}
