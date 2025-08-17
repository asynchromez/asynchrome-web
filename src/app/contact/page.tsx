'use client';
import React from 'react';
import LightRays from '../components/features/LightRays/LightRays';
import Nav from '../components/features/Nav/Nav';

const Contact = () => {
  // Кастомная SVG стрелка
  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

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

      {/* Основной контент */}
      <div className="flex-grow flex flex-col items-center justify-center z-10 px-4">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-4xl font-bold text-white text-center mb-8">CONTACT</h1>
          
          {/* Telegram */}
          <div className="flex flex-col group">
            <a 
              href="https://t.me/asynchrome" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-gray-400 transition-colors flex items-center"
            >
              TELEGRAM
              <ArrowIcon />
            </a>
            <div className="h-px bg-white/20 my-2 w-full"></div>
          </div>
          
          {/* Steam */}
          <div className="flex flex-col group">
            <a 
              href="https://steamcommunity.com/id/asynchrome/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-gray-400 transition-colors flex items-center"
            >
              STEAM
              <ArrowIcon />
            </a>
            <div className="h-px bg-white/20 my-2 w-full"></div>
          </div>
          
          {/* GitHub */}
          <div className="flex flex-col group">
            <a 
              href="https://github.com/asynchromez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-gray-400 transition-colors flex items-center"
            >
              GITHUB
              <ArrowIcon />
            </a>
            <div className="h-px bg-white/20 my-2 w-full"></div>
          </div>
          
          {/* Website */}
          <div className="flex flex-col group">
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-gray-400 transition-colors flex items-center"
            >
              WEBSITE
              <ArrowIcon />
            </a>
            <div className="h-px bg-white/20 my-2 w-full"></div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Contact;