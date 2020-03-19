
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UDemy-TS-Hello';

  post = {
    title: "Title",
    isFavorite: true
  }

  mockTweet = {
    body: "Body of mock tweet...",
    isLiked: false,
    likeCount: 10
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("onFavoriteChanged: " + eventArgs.newValue);
  }
}
