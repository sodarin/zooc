import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-enterprise-item-deprecated',
  templateUrl: './enterprise-item-deprecated.component.html',
  styleUrls: ['./enterprise-item-deprecated.component.css']
})
export class EnterpriseItemDeprecatedComponent implements OnInit {


  @Input() item;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailEnterprise(id: string) {
    this.router.navigateByUrl(`/enterprise/${id}`);
  }

}
