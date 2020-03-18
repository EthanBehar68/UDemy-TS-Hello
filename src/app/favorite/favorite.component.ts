import { Component, OnInit } from '@angular/core';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isSelected: boolean;
  iconClass = faStarHalf;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("whop");
    this.isSelected = !this.isSelected;
    this.iconClass = (this.isSelected) ? faStar : faStarHalf;
  }

}
