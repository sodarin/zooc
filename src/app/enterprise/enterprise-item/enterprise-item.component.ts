import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-enterprise-item',
  templateUrl: './enterprise-item.component.html',
  styleUrls: ['./enterprise-item.component.css']
})
export class EnterpriseItemComponent implements OnInit {


  @Input() item;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailEnterprise(id: string) {
    this.router.navigateByUrl(`/enterprise/${id}`);
  }

}
