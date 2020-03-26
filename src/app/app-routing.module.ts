import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionOneThruWorkComponent } from './section-one-thru-work/section-one-thru-work.component';

// { path: '', component: }
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers/:id', component: GithubProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'sectionwork', component: SectionOneThruWorkComponent },
  { path: '**', component: NotFoundComponent },
  // ** wildcard that captures any url not listed above
  // Order is important so ** needs to be lastk
  // If 'followers' was above 'follwers/:username' we would never reach 'followers/:username'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
