import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  // Angular Lifecycle Hooks
  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  // Pessimistic Approach
  // createPost(input: HTMLInputElement) {
  //   let post = { title: input.value }
  //   input.value = '';

  //   this.service.create(post)
  //     .subscribe(newPost => {
  //       post['id'] = newPost.id;
  //       this.posts.splice(0, 0, post);
  //     },
  //       (error: AppError) => {
  //         if (error instanceof BadInputError) {
  //           // this.form.setErros(error.originalError);
  //           alert('Something went wrong creating the post. \n' + error.originalError);
  //         } else throw error;
  //       });
  // }

  // Optimistic Approach
  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInputError) {
            // this.form.setErros(error.originalError);
            alert('Something went wrong creating the post. \n' + error.originalError);
          } else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  // Pessimistic Approach
  // deletePost(post) {
  //   this.service.delete(345)
  //     .subscribe(
  //       () => {
  //         let index = this.posts.indexOf(post);
  //         this.posts.splice(index, 1);
  //       },
  //       (error: AppError) => {
  //         if (error instanceof NotFoundError)
  //           alert('This post has already been deleted.');
  //         else throw error;
  //       });
  // }

  // Optimistic
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deleteObservable(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
  }

  // Observables vs Promises
  // Promises execute code immediately
  // Observables are lazy
  // Promises are eager
  // Nothing happens until you subscribe to Observables!!!
  // Promises don't care if you the .then method
  // Observables have powerful operators like map, retry, catch
  // They also allow reactive programming
  deletePostPromise(post) {
    this.service.deletePromise(post.id);
  }
}
