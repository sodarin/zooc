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
    this.initMeScroll();
  }
  //初始化滚动加载配置
  initMeScroll() {
    this.mescroll = new MeScroll("mescroll", {
      down: {
        use: true,
        auto: false,
        page: {
          num: 0,
          size: 5
        },
        callback: this.refresh//下拉刷新的回调函数
      },
      up: {
        use: true,
        auto: true,//进入页面的时候自动调用上拉加载
        page: {
          num: 0,
          size: 5//单个页面最多显示5条数据
        },
        callback: this.loadMore//上拉加载的回调函数
      }
    });
  }

  //分页加载五条数据
  loadFiveTrials(targetPage: number) {
    this.trailService$.getTrialsWithPagination(1, true, targetPage, 5).subscribe(result => {
      if (targetPage == 1) {
        this.trials = [];
      }
      this.totalSize = result.total;
      this.currentPageSize = result.list.length;
      this.trials.push(...result.list);
      //数据加载成功调用此函数，传入总数据及当前页数据
      this.mescroll.endBySize(this.currentPageSize, this.totalSize);
      this.targetPage++;
    }, error2 => {
      this.mescroll.endErr();
    });
  }

  //下拉刷新的回调函数
  refresh = () => {
    this.targetPage = 1;
    //调用上拉加载的回调函数，并将目标页码重置为1
    this.mescroll.resetUpScroll(true);
  };

  //上拉加载的回调函数
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
