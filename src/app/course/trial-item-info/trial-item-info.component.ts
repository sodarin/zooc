import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { ActivatedRoute, Router } from '@angular/router';
import { TrialService } from '../../service/trial/trial.service';
import { BranchService } from '../../service/branch/branch.service';
import { Branch } from '../../model/Branch';
import { MatBottomSheet, MatSnackBar } from '@angular/material';
import { ReservationMessageComponent } from './reservation-message/reservation-message.component';
import { LoginService } from '../../service/login/login.service';
import { ReserveService } from '../../service/reserve/reserve.service';

@Component({
  selector: 'app-trial-item-info',
  templateUrl: './trial-item-info.component.html',
  styleUrls: ['./trial-item-info.component.scss']
})
export class TrialItemInfoComponent implements OnInit {
  item: Trial;
  branch: Branch;
  isReserved = false;
  message = '';
  reservationId;

  constructor(private snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet,
              private router: Router,
              private routeInfo: ActivatedRoute,
              private loginService$: LoginService,
              private trialService$: TrialService,
              private branchService$: BranchService,
              private reservationService$: ReserveService) { }


  ngOnInit() {
    //获取试听课程的详情
    this.trialService$.getDetailById(this.routeInfo.snapshot.params['id']).subscribe(result => {
      this.item = result;
      document.getElementById('detail').innerHTML = result.detail;
      if (this.loginService$.resultUser) {
        this.reservationService$.getReservationListByUserId(this.loginService$.resultUser.userId)
          .subscribe(result => {
            result.list.forEach(item => {
              console.log(item);
              console.log('this.item.trialId: ' + this.item.trialId);
              if (item.trialId == this.item.trialId && !(item.status == 'CANCELED')) {
                this.isReserved = true;
                this.reservationId = item.reservationId;
                this.message = item.message;
              }
            })
          })
      }
    });
  }

  //获取分部信息
  getBranchDetailIfNotDone() {
    if (this.branch) {
      return;
    }
    this.branchService$.getId(this.item.branchId).subscribe(branch => {
      this.branch = branch;
      console.log(`Longitude: ${this.branch.longitude}`);
      console.log(`Latitude: ${this.branch.latitude}`);
    });
  }

  //点击页面按钮，打开bottom sheet，在bottom sheet里进行预约及留言操作
  openBottomSheet() {
    //判断是否登录，如果没有登录则跳转到登录页面，如果已登录则可以正常预约
    if (this.loginService$.resultUser) {
      const bottomSheet = this.bottomSheet.open(ReservationMessageComponent, {
        data: this.message
      });
      //如果该课程还没有预约，则可以申请预约
      if (!this.isReserved) {
        //bottom sheet关闭后将返回result数据，在这里通过subscribe进行监听
        bottomSheet.afterDismissed().subscribe(result => {
          //如果返回数据不为空，则用户进行了预约
          if (result != null) {
            this.reservationService$.createReservation(this.item.trialId, this.loginService$.resultUser.userId, result)
              .subscribe(result => {
                this.snackBar.open('申请预约成功！', null, {
                  duration: 2000
                });
                this.isReserved = true;
              }, error2 => {
                this.snackBar.open(error2.error, null, {
                  duration: 2000
                });
              });
          }
        });
        //如果课程已经预约，则用户只能修改留言
      } else {
        bottomSheet.afterDismissed().subscribe(result => {
          if (result != null) {
            const msg = result;
            this.reservationService$.updateReservationMessage(this.reservationId, result)
              .subscribe(result => {
                this.message = msg;
                this.snackBar.open('修改留言成功！', null, {
                  duration: 2000
                });
              }, error2 => {
                this.snackBar.open(error2.error, null, {
                  duration: 2000
                });
              });
          }
        });
      }

    } else {
      this.snackBar.open('请先登录！', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/login');
    }

  }
}
