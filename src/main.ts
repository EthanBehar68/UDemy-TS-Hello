
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// import { LikeComponent } from './like.component';

// // Part of Section 2's Exercise
// let initialLikes = 10;
// let likes = new LikeComponent(initialLikes, false);

// likes.onClick();
// likes.onClick();