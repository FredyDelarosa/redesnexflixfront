import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive, 
    VideoPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-streaming';
}
