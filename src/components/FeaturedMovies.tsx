import MovieCard, { Movie } from './MovieCard';
import duneImage from '@/assets/movie-dune2.jpg';
import insideOutImage from '@/assets/movie-insideout2.jpg';
import deadpoolImage from '@/assets/movie-deadpool3.jpg';
import quietPlaceImage from '@/assets/movie-quietplace.jpg';

const featuredMovies: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    year: 2025,
    genre: 'Sci-Fi Epic',
    rating: 8.9,
    image: duneImage,
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    featured: true
  },
  {
    id: '2', 
    title: 'Inside Out 2',
    year: 2025,
    genre: 'Animation',
    rating: 8.2,
    image: insideOutImage,
    description: 'Riley enters puberty and her emotions encounter new feelings that turn her world upside down.',
    featured: true
  },
  {
    id: '3',
    title: 'Deadpool & Wolverine',
    year: 2025,
    genre: 'Action Comedy',
    rating: 8.5,
    image: deadpoolImage,
    description: 'Deadpool teams up with Wolverine in a universe-hopping adventure that breaks all the rules.',
    featured: true
  },
  {
    id: '4',
    title: 'A Quiet Place: Day One',
    year: 2025,
    genre: 'Horror Thriller',
    rating: 7.8,
    image: quietPlaceImage,
    description: 'Experience the day the world went quiet in this heart-stopping origin story.',
    featured: true
  }
];

export default function FeaturedMovies() {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gold-glow bg-gradient-gold bg-clip-text text-transparent">
            Featured Movies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most anticipated and highest-rated movies of 2025
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {featuredMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <MovieCard 
                movie={movie} 
                size={index === 0 ? 'large' : 'medium'} 
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group px-10 py-4 bg-gradient-card border border-primary/30 text-foreground rounded-xl font-semibold text-lg transition-all duration-500 hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow card-3d">
            <span className="relative z-10">View All Movies</span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
}