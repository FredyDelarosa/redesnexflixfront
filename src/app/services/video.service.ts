import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private backendUrl = 'http://23.22.223.193:8000/video/Lalalandmovie.mp4';

  getVideoUrl(videoName: string): string {
    return `${this.backendUrl}/${videoName}`;
  }
}
