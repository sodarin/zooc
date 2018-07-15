import {Component, OnInit} from '@angular/core';
import {Categories, SearchService} from '../../service/search/search.service';
import {BranchService} from '../../service/branch/branch.service';
import {Branch} from '../../model/Branch';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  name: string = '';
  category: number;
  branchId: number;
  minPrice: number;
  maxPrice: number;

  url: string = '';

  categories: Categories[];
  branches: Branch[];

  filterConditions: any;

  constructor(private searchService$: SearchService,
              private branchService$: BranchService,
              private bottomSheetRef: MatBottomSheetRef<SearchPageComponent>) {

  }

  ngOnInit() {
    let element: HTMLElement = document.getElementById('name') as HTMLElement;
    this.searchService$.getCategories()
      .subscribe(result => {
        this.categories = result;
        this.category = this.categories[0].categoryId;
        element.click();
      });
    this.branchService$.getAll(1)
      .subscribe(result => {
        this.branches = result.list;
        this.branchId = this.branches[0].branchId;
        console.log(this.branchId);
        element.click();
      });
    this.url = location.pathname;
  }

  getNewCategoryValue(value: number) {
    this.category = value;
    console.log(this.category);
  }

  getNewBranchValue(value: number) {
    this.branchId = value;
    console.log(this.branchId);
  }

  submitConditions() {
    if (this.url == '/home/trial') {
      this.filterConditions = {'name': this.name, 'category': this.category, 'branchId': this.branchId};
    }else {
      this.filterConditions = {'name': this.name, 'category': this.category, 'minPrice': this.minPrice, 'maxPrice': this.maxPrice};
    }
    this.bottomSheetRef.dismiss(this.filterConditions);
  }

  resetConditions() {
    if (this.url == '/home/trial') {
      this.filterConditions = {'name': '', 'category': '', 'branchId': ''};
    }else {
      this.filterConditions = {'name': '', 'category': '', 'minPrice': '', 'maxPrice': ''};
    }
    this.bottomSheetRef.dismiss(this.filterConditions);
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

}
