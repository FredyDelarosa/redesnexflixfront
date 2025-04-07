
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  
  featuredMovie: Movie = {
    id: 1,
    title: 'Nowere',
    poster : 'assets/images/Nowhere.jpg',
    year: 2023,
    match: 98,
    duration: '2h 15min',
    description: 'Mia y Nico deciden abandonar España debido a una crisis mundial que ha provocado escasez de artículos de primera necesidad y el surgimiento de un gobierno tiránico que asesina civiles para controlar la escasez de recursos. La pareja teme por su vida y la seguridad de su hijo nonato. Anteriormente habían perdido a su primogénita, Uma, a quien los militares les arrebataron como parte de un intento genocida de reducir la población de España asesinando a niños, ancianos y mujeres embarazadas. Se la da por muerta. Mia se culpa a sí misma por el secuestro de Uma y carga con la culpa.',
    genres: ['Acción', 'Aventura', 'Ciencia ficción'],
  };

  popularMovies: Movie[] = [
    {
      id: 2,
      title: 'Película Popular 1',
      poster: '/api/placeholder/230/130',
      year: 2023,
      match: 95,
      duration: '1h 45min',
      description: 'Descripción de la película popular 1',
      genres: ['Acción', 'Drama'],

    },
    {
      id: 3,
      title: 'Película Popular 2',
      poster: '/api/placeholder/230/130',
      year: 2022,
      match: 92,
      duration: '2h 05min',
      description: 'Descripción de la película popular 2',
      genres: ['Comedia', 'Romance'],
      videoUrl: 'https://ejemplo.com/video3.mp4'
    },
    // Añadir más películas aquí...
  ];

  trendingMovies: Movie[] = [
    {
      id: 6,
      title: 'Película Tendencia 1',
      poster: '/api/placeholder/230/130',
      year: 2023,
      match: 97,
      duration: '1h 52min',
      description: 'Descripción de la película tendencia 1',
      genres: ['Thriller', 'Misterio'],
      videoUrl: 'https://ejemplo.com/video6.mp4'
    },
    {
      id: 7,
      title: 'Película Tendencia 2',
      poster: '/api/placeholder/230/130',
      year: 2023,
      match: 94,
      duration: '2h 12min',
      description: 'Descripción de la película tendencia 2',
      genres: ['Ciencia ficción', 'Acción'],
      videoUrl: 'https://ejemplo.com/video7.mp4'
    },
    // Añadir más películas aquí...
  ];

  watchAgainMovies: Movie[] = [
    {
      id: 10,
      title: 'Volver a Ver 1',
      poster: '/api/placeholder/230/130',
      year: 2021,
      match: 91,
      duration: '1h 48min',
      description: 'Descripción de la película para volver a ver 1',
      genres: ['Drama', 'Historia'],
      videoUrl: 'https://ejemplo.com/video10.mp4'
    },
    {
      id: 11,
      title: 'Volver a Ver 2',
      poster: '/api/placeholder/230/130',
      year: 2020,
      match: 88,
      duration: '2h 10min',
      description: 'Descripción de la película para volver a ver 2',
      genres: ['Comedia', 'Familiar'],
      videoUrl: 'https://ejemplo.com/video11.mp4'
    },
    // Añadir más películas aquí...
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Puedes cargar datos desde un servicio aquí
  }

  playMovie(movie: Movie): void {
    // Método 1: Usando servicios para compartir datos
    // this.movieService.setSelectedMovie(movie);
    
    // Método 2: Usando parámetros de ruta
    this.router.navigate(['/watch', movie.id]);
    
    // Método 3: Usando estado de navegación (más datos)
    // this.router.navigateByUrl('/watch', { state: { movie } });
  }
}