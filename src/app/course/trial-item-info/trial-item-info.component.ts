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
              private router: Router,
              private routeInfo: ActivatedRoute,
              private loginService$: LoginService,
              private trialService$: TrialService,
              private branchService$: BranchService,
              private bottomSheet: MatBottomSheet,
              private reservationService$: ReserveService) { }


  ngOnInit() {
    this.trialService$.getDetailById(this.routeInfo.snapshot.params['id']).subscribe(result => {
      this.item = result;
    });
    if (this.loginService$.resultUser) {
      this.reservationService$.getReservationListByUserId(this.loginService$.resultUser.userId)
        .subscribe(result => {
          result.list.forEach(item => {
            console.log(item);
            console.log('this.item.trialId: ' + this.item.trialId);
            if (item.trialId == this.item.trialId) {
              this.isReserved = true;
              this.reservationId = item.reservationId;
              this.message = item.message;
            }
          });
        });
    }
  }

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

  openBottomSheet() {
    if (this.loginService$.resultUser) {
      const bottomSheet = this.bottomSheet.open(ReservationMessageComponent, {
        data: this.message
      });
      if (!this.isReserved) {
        bottomSheet.afterDismissed().subscribe(result => {
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
      this.snackBar.open('请先登录', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/login');
    }

  }
}
