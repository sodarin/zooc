import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zzzz-avatar',
  templateUrl: './zzzz-avatar.component.html',
  styleUrls: ['./zzzz-avatar.component.scss']
})
export class ZzzzAvatarComponent implements OnInit {
  // The URL of the avatar. If it's not specified, a default avatar will be used.
  @Input() avatarUrl;
  // The diameter or the side length of the avatar.
  @Input() size;
  // The shape of the avatar. Either 'circle' (default) or 'rectangle'.
  @Input() shape = 'circle';
  // The icon to be used when the avatar URL is not specified. Either 'anonymous' or 'portrait' (default)
  @Input() placeholder = 'portrait';

  constructor() { }

  ngOnInit() {
  }

}
