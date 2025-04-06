import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private backendUrl = 'http://localhost:8000/video/lalaland.mp4';

  getVideoUrl(videoName: string): string {
    return `${this.backendUrl}/${videoName}`;
  }
}
