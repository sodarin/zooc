import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {LoginService, UserResponse} from '../../../../service/login/login.service';
import {User} from '../../../../model/User.model';

@Component({
  selector: 'app-enterprise-moment-comment-item',
  templateUrl: './enterprise-moment-comment-item.component.html',
  styleUrls: ['./enterprise-moment-comment-item.component.css']
})
export class EnterpriseMomentCommentItemComponent implements OnInit {

  @Input() comment;
  user: UserResponse;
  constructor(private loginService$: LoginService) { }

  ngOnInit() {
    this.user = this.loginService$.resultUser;
  }

}
