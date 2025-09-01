import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  description: string;
  featured?: boolean;
}

interface MovieCardProps {
  movie: Movie;
  size?: 'small' | 'medium' | 'large';
}

export default function MovieCard({ movie, size = 'medium' }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'w-48 h-72',
    medium: 'w-64 h-96', 
    large: 'w-80 h-[480px]'
  };

  return (
    <Card 
      className={`${sizeClasses[size]} group cursor-pointer card-3d relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full relative">
        {/* Movie Poster */}
        <div className="relative h-3/4 overflow-hidden">
          <img 
            src={movie.image} 
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
            ★ {movie.rating}
          </div>

          {/* Featured Badge */}
          {movie.featured && (
            <div className="absolute top-4 left-4 bg-cinema-red/90 backdrop-blur-sm text-cinema-red-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Featured
            </div>
          )}
        </div>

        {/* Movie Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card to-transparent">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-accent font-semibold">{movie.year}</span>
            <span className="text-muted-foreground text-sm uppercase tracking-wide">{movie.genre}</span>
          </div>
          
          {/* Description - appears on hover */}
          <div className={`transition-all duration-500 overflow-hidden ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {movie.description}
            </p>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} style={{
          boxShadow: 'inset 0 0 100px hsl(var(--primary) / 0.2)'
        }}></div>

        {/* 3D Tilt Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardContent>
    </Card>
  );
}

export type { Movie };