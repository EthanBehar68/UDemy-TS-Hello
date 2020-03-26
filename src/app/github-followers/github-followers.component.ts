import { Component, OnInit, Input } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean;
  followers: any[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
      this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
