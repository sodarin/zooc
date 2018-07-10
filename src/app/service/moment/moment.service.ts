import { Injectable } from '@angular/core';
import {Moment} from '../../model/Moment.model';
import {MomentLike} from '../../model/MomentLike.model';
import {MomentComment} from '../../model/MomentComment.model';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  moments: Moment[] = [
    new Moment('1', '1', '这是一条新的朋友圈', '2018-6-27 10:30:55'),
    new Moment('2', '1', '这是一条更新的朋友圈', '2018-6-27 10:31:55'),
    new Moment('3', '1', '这是一条比上一条新的朋友圈', '2018-6-27 10:32:55'),
    new Moment('4', '3', '这是一条新的朋友圈', '2018-6-27 10:33:55'),
    new Moment('5', '1', '这是一条比上一条新的朋友圈，而且这条朋友圈很长很长很长，没有什么特殊的涵义，我只是想测试一下分行的显示效果，不用在意噢', '2018-6-27 10:34:55'),
    new Moment('6', '1', '这是一条比上一条新的朋友圈', '2018-6-27 10:35:55'),
    new Moment('7', '2', '这是一条新的朋友圈', '2018-6-27 10:36:55'),
    new Moment('8', '1', '这是一条最新的朋友圈', '2018-6-27 10:37:55'),
  ];

  momentLike: MomentLike[] = [
    new MomentLike('1', '1', '1', '2018-6-27 10:30:55'),
    new MomentLike('2', '2', '2', '2018-6-27 10:30:55'),
    new MomentLike('3', '2', '1', '2018-6-27 10:30:55'),
    new MomentLike('4', '1', '2', '2018-6-27 10:30:55'),
    new MomentLike('5', '3', '1', '2018-6-27 10:30:55'),
  ];

  momentComment: MomentComment[] = [
    new MomentComment('1', '1', '1', '这是一条评论', '2018-6-27 10:30:55'),
    new MomentComment('2', '1', '1', '这是一条评论', '2018-6-27 10:30:55'),
    new MomentComment('3', '1', '1', '这是一条评论', '2018-6-27 10:30:55'),
    new MomentComment('4', '1', '1', '这是一条评论', '2018-6-27 10:30:55'),
    new MomentComment('5', '1', '1', '这是一条评论', '2018-6-27 10:30:55'),
    new MomentComment('6', '1', '1', '这是一条评论，它很长很长很长，它是用来测试分行布局的，它真的很长很长很长很长', '2018-6-27 10:30:55'),

  ];

  constructor() { }

  getMomentByEnterpriseId(enterpriseId: string): Moment[] {
    return this.moments.filter(moment => moment.enterpriseId == enterpriseId);
  }

  getMomentLikeNum(momentId: string): number {
    return this.momentLike.filter(momentLike => momentLike.momentId == momentId).length;
  }

  getMomentCommentByMomentId(momentId: string): MomentComment[] {
    console.log(momentId);
    return this.momentComment.filter(momentComment => momentComment.momentId == momentId);
  }
}
