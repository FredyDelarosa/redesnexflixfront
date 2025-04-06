import { provideRouter } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig = {
  providers: [
    provideRouter([]), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
  standalone: true,
  imports: [
    VideoPlayerComponent,
  ],
};
