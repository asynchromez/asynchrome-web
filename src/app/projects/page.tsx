'use client';
import React from 'react';
import LightRays from '../components/features/LightRays/LightRays';
import Nav from '../components/features/Nav/Nav';
import MagicBento from '../components/features/MagicBento/MagicBento';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Навигация */}
      <Nav />

      {/* Анимированный фон */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0 z-0"
      />

      {/* Основной контент с MagicBento */}
      <div className="flex-grow flex items-center justify-center z-10 p-4">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default Projects;