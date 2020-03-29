import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './common/error-interceptor';
import { AppRoutingModule } from './app-routing.module';

import { TitleCasePipe } from './custom pipes/title-case.pipe';
import { SummaryPipe } from './custom pipes/summary.pipe';
import { InputFormatDirective } from './custom directives/input-format.directive';
import { CoursesService } from './course/courses.service';
import { AuthorsService } from './authors/authors.service';
import { PostService } from './services/post.service';
import { GithubFollowersService } from './services/github-followers.service';
import { CoursesComponent } from './course/courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { SectionOneThruWorkComponent } from './section-one-thru-work/section-one-thru-work.component';
import { ArchivesComponent } from './archives/archives.component';

@NgModule({
  declarations: [
    SummaryPipe,
    TitleCasePipe,
    InputFormatDirective,
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    LikesComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    SectionOneThruWorkComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService, // Uses singleton pattern by default
    AuthorsService,
    PostService,
    GithubFollowersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }