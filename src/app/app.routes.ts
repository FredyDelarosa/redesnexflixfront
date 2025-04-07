// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AuthGuard } from './auth.guard';

console.log('Rutas cargadas');
export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'watch/:id', component: VideoPlayerComponent },
  { path: '**', redirectTo: 'login' }
];