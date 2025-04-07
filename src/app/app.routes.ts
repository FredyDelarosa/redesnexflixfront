// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:id', component: VideoPlayerComponent },
  { path: '**', redirectTo: '' }
];