import { Canvas } from '@react-three/fiber';
import { Text, Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import heroBackground from '@/assets/hero-background.jpg';

function FloatingTitle() {
  const textRef = useRef<Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Text
        ref={textRef}
        font="/fonts/inter-bold.woff"
        fontSize={3}
        color="#3B82F6"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        NUT_JOB
        <meshStandardMaterial 
          color="#3B82F6" 
          emissive="#1E40AF"
          emissiveIntensity={0.3}
        />
      </Text>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#F59E0B" />
      
      <FloatingTitle />
      
      <Sparkles
        count={100}
        scale={[20, 20, 20]}
        size={2}
        speed={0.5}
        color="#3B82F6"
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-8xl md:text-9xl font-black mb-6 text-glow bg-gradient-primary bg-clip-text text-transparent">
            NUT_JOB
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light">
            Your Ultimate Destination for 2025's Hottest Movies & Animations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow card-3d">
              <span className="relative z-10">Explore Movies</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
            <button className="px-8 py-4 border-2 border-accent text-accent rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground card-3d">
              Watch Trailers
            </button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}