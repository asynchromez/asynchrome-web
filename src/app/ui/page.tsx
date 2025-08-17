import React from 'react';
import LightRays from '../components/features/LightRays/LightRays';
import Nav from '../components/features/Nav/Nav';

const UiLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Навбар */}
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

      {/* Hero-блок */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">
        <div className="text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">asynchrome/</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500">ui</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl opacity-80 mb-10">
            Minimal components for maximal productivity
          </h2>
          
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 text-xl bg-gradient-to-r from-yellow-400 to-green-500 text-black rounded-lg hover:opacity-90 transition-all">
              Browse Components
            </button>
            <button className="px-8 py-3 text-xl border border-white/20 rounded-lg hover:bg-white/10 transition-all">
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Футер */}
      <div className="py-6 text-center text-base text-white/30">
        © {new Date().getFullYear()} — asynchrome
      </div>
    </div>
  );
};

export default UiLanding;