// movie.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  match: number;
  duration: string;
  description: string;
  genres: string[];
  videoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieDatabase: Movie[] = [
    {
      id: 1,
      title: 'Título de Película Destacada',
      poster: '/api/placeholder/500/300',
      year: 2023,
      match: 98,
      duration: '2h 15min',
      description: 'Una descripción cautivadora de la película destacada que aparece en el banner principal para atraer al usuario a verla.',
      genres: ['Acción', 'Aventura', 'Ciencia ficción'],
      videoUrl: 'https://ejemplo.com/video1.mp4'
    },
    // ... más películas (las mismas que definimos en el componente Home)
  ];

  private selectedMovieSubject = new BehaviorSubject<Movie | null>(null);
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  constructor() { }

  getAllMovies(): Movie[] {
    return this.movieDatabase;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movieDatabase.find(movie => movie.id === id);
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovieSubject.next(movie);
  }
}