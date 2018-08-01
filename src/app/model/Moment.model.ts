import {MomentImg, MomentLikeDetail} from '../service/moment/moment.service';
import {MomentComment} from './MomentComment.model';

export class Moment {
  constructor(
    public momentId: number,
    public enterpriseId: number,
    public content: string,
    public time: Date,
    public likeNum: number = 0,
    public hasLiked: boolean = false,
    public likeLatest: MomentLikeDetail[] = [],
    public imgList: MomentImg[] = [],
    public commentList: MomentComment[] =[]
  ){}
}
