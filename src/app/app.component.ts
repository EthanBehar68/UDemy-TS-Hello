
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UDemy-TS-Hello';

  task = {
    title: 'Review Appplications',
    assignee: {
      name: 'John Smith'
    }
  }

  canSave = false;

  viewMode = 'somethingElse';

  courses = [1, 2];

  courses2 = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  coursesAdd = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  coursesLoad: any;

  post = {
    title: "Title",
    isFavorite: true
  };

  mockTweet = {
    body: "Body of mock tweet...",
    isLiked: false,
    likeCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("onFavoriteChanged: " + eventArgs.newValue);
  }

  onAdd() {
    this.coursesAdd.push({ id: 4, name: 'AddedCourse' })
  }

  onRemove(course) {
    let index = this.coursesAdd.indexOf(course);
    this.coursesAdd.splice(index, 1);
  }

  onChange(course) {
    course.name = 'CHANGED';
  }

  loadCourses() {
      this.coursesLoad = [
        { id: 1, name: 'course1' },
        { id: 2, name: 'course2' },
        { id: 3, name: 'course3' }
      ];
  }

  trackCourse(index, course) {
      return course ? course.id : undefined;
  }

  changeCanSave() {
    this.canSave = !this.canSave;
  }
}
