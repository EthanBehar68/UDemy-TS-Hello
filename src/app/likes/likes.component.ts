import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input('isActive') isLiked: boolean;
  @Input('likesCount') count: number;

  onClick() {
    this.isLiked = !this.isLiked;
    this.count += (this.isLiked)  ? 1  : -1;
  }
}
