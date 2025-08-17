'use client';
import React from 'react';
import GradientText from '../components/ui/GradientText/GradientText';
import LightRays from '../components/features/LightRays/LightRays';
import Nav from '../components/features/Nav/Nav';

const About = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center relative overflow-hidden">
      {/* Навбар добавлен здесь */}
      <Nav />

      {/* LightRays фон */}
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
      <div className="relative z-10 w-full flex flex-col items-center justify-center flex-grow p-8">
        {/* Большая белая надпись asynchrome */}
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-12 tracking-tight">
          asynchrome
        </h1>

        {/* Градиентный текст с информацией */}
        <div className="max-w-2xl text-center space-y-8">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            className="text-4xl md:text-4xl font-bold mb-6"
          >
            17 y.o Next.js & React Developer
          </GradientText>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            className="text-3xl md:text-4xl font-medium"
          >
            Based in Saint Petersburg, Russia
          </GradientText>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            className="text-3xl md:text-4xl font-medium"
          >
            Student at Hexlet University
          </GradientText>

          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent my-6"></div>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            className="text-3xl md:text-4xl font-medium"
          >
            Loving fullstack-dev since August 25.
          </GradientText>

        </div>
      </div>
    </div>
  );
};

export default About;