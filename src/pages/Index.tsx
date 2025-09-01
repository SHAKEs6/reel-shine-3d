import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import FeaturedMovies from '@/components/FeaturedMovies';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <Hero3D />
        <FeaturedMovies />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
