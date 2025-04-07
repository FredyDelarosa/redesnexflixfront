import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../services/video.service';

@Component({
  standalone: true,
  selector: 'app-video-player',
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @Input() videoName: string = '';
  videoUrl: string = '';
  isOnline: boolean = navigator.onLine;
  private videoElement!: HTMLVideoElement;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoUrl = this.videoService.getVideoUrl(this.videoName);

    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));
  }

  ngAfterViewInit() {
    this.videoElement = document.querySelector('video')!;
    this.videoElement.preload = 'metadata';

    this.videoElement.addEventListener('canplaythrough', () => {
      console.log('Video listo para reproducirse');
    });

    this.videoElement.addEventListener('error', () => {
      console.error('Error al cargar el video');
    });

    // Control de reproducción en base a conexión y buffer
    this.videoElement.addEventListener('timeupdate', () => {
      this.checkBufferAndConnection();
    });

    this.videoElement.addEventListener('seeking', () => {
      this.checkBufferAndConnection(true); // check extra al adelantar
    });
  }

  isLoadingDueToOffline: boolean = false;

  setOnlineStatus(status: boolean) {
    this.isOnline = status;
    if (!status) {
      this.isLoadingDueToOffline = true;
      this.videoElement.pause();
    } else {
      this.isLoadingDueToOffline = false;
      this.checkBufferAndConnection();
    }
  }

  checkBufferAndConnection(isSeeking = false) {
    const currentTime = this.videoElement.currentTime;
    const buffered = this.videoElement.buffered;

    let isBuffered = false;

    for (let i = 0; i < buffered.length; i++) {
      if (currentTime >= buffered.start(i) && currentTime < buffered.end(i)) {
        const bufferAhead = buffered.end(i) - currentTime;
        if (bufferAhead >= 3) {
          isBuffered = true;
        }
      }
    }

    if (!this.isOnline) {
      if (!isBuffered) {
        this.isLoadingDueToOffline = true;
        this.videoElement.pause();
      }
    } else {
      if (isBuffered && this.videoElement.paused) {
        this.isLoadingDueToOffline = false;
        this.videoElement.play().catch(err => console.error("Error al reanudar:", err));
      }
    }

    if (isSeeking && !isBuffered) {
      this.isLoadingDueToOffline = true;
      this.videoElement.pause();
    }
  }
}
