import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {'label': '首页', 'path': '/home', 'icon': 'home'},
    {'label': '试听', 'path': '/home/free-trials', 'icon': 'hearing'},
    {'label': '精品', 'path': '/home/elaborate-courses', 'icon': 'grade'},
    {'label': '企业', 'path': '/enterprise', 'icon': 'business_center'},
  ];


  constructor() { }

  ngOnInit() {
  }


}

