import { Component, OnInit, Input } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean;
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {
    // Combining two subscribes
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        let order = combined[1].get('order');

        console.log(id, page, order);
        return this.service.getAll();
      }))
      .subscribe(followers => { this.followers = followers });
      
    // Example code
    //this.route.paramMap.subscribe(params => { });
    //this.route.snapshot.paramMap.get('id');

    //this.route.queryParamMap.subscribe(params => { });
    //this.route.snapshot.queryParamMap.get('page');
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
