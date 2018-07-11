import { Injectable } from '@angular/core';
import {FreeTrial} from '../../../model/FreeTrialModel';

@Injectable({
  providedIn: 'root'
})
export class FreeTrialService {

  freeTrials = [
    new FreeTrial('1', '../../../assets/img/free-trial/5a39cd3f0001c09805400300.jpg', '全网最热Python3入门', 336.00, '初级', 510),
    new FreeTrial('2', '../../../assets/img/free-trial/5ac2dfe100014a9005400300.jpg', '分布式事务实践', 348.00, '高级', 130),
    new FreeTrial('3', '../../../assets/img/free-trial/5b2a29d50001bf4605400300.jpg', 'Python3入门机器学习 经典算法与应用', 400.00, '初级', 600),
    new FreeTrial('4', '../../../assets/img/free-trial/59b8a486000107fb05400300.jpg', 'Vue2.5开发从零基础入门到实战项目', 226.00, '中级', 410)
  ];

  constructor() { }

  getFreeTrials(): FreeTrial[] {
    return this.freeTrials;
  }

  getFreeTrialsTopThree(): FreeTrial[] {
    return this.freeTrials.slice(0, 3);
  }

  getFreeTrialsById(trialId: string): FreeTrial {
    for (let i = 0; i < this.freeTrials.length; i++) {
      if (this.freeTrials[i].trialId == trialId)
        return this.freeTrials[i];
    }
  }
}
