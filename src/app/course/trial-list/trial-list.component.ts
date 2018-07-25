import { Component, OnInit } from '@angular/core';
import { Trial } from '../../model/Trial';
import { TrialService } from '../../service/trial/trial.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatBottomSheet} from '@angular/material';
import {SearchPageComponent} from '../search-page/search-page.component';
declare var MeScroll: any;

@Component({
  selector: 'app-trial-list',
  templateUrl: './trial-list.component.html',
  styleUrls: ['./trial-list.component.scss']
})
export class TrialListComponent implements OnInit {

  trials: Trial[];

  public mescroll;

  targetPage: number = 1;
  totalSize: number;
  currentPageSize: number;

  constructor(private trailService$: TrialService,
              private router: Router,
              private routeInfo: ActivatedRoute,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // TODO The enterprise ID is hard coded
    this.initMeScroll();
  }

  initMeScroll() {
    this.mescroll = new MeScroll("mescroll", {
      down: {
        use: true,
        auto: false,
        page: {
          num: 0,
          size: 5
        },
        callback: this.refresh
      },
      up: {
        use: true,
        auto: true,
        page: {
          num: 0,
          size: 5
        },
        callback: this.loadMore
      }
    });
  }

  loadFiveTrials(targetPage: number) {
    this.trailService$.getTrialsWithPagination(1, true, targetPage, 5).subscribe(result => {
      if (targetPage == 1) {
        this.trials = [];
      }
      this.totalSize = result.total;
      this.currentPageSize = result.list.length;
      this.trials.push(...result.list);
      this.mescroll.endBySize(this.currentPageSize, this.totalSize);
      this.targetPage++;
    }, error2 => {
      this.mescroll.endErr();
    });
  }

  refresh = () => {
    this.targetPage = 1;
    this.mescroll.resetUpScroll(true);
  };

  loadMore = () => {
    this.loadFiveTrials(this.targetPage);
  };

  navToTrialDetailPage(item: Trial) {
    this.router.navigate([`${item.trialId}`], { relativeTo: this.routeInfo });
  }

  openBottomSheet() {
    const bottomSheet = this.bottomSheet.open(SearchPageComponent);
    bottomSheet.afterDismissed().subscribe(result => {
      if (result) {
        console.log(result);
        this.trailService$.getAll(1, null, result.name, result.branchId, null, result.category, null)
          .subscribe(next => this.trials = next.list);
      }
    })
  }

}
