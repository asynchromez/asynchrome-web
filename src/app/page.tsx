import React from 'react';
import LightRays from './components/features/LightRays/LightRays';
import Nav from './components/features/Nav/Nav';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      {/* Навбар добавлен здесь */}
      <Nav />
      
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
        className={styles.lightRays}
      />

      {/* Основной контент - фиксирован в центре экрана */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
          asynchrome
        </h1>
        <h2 className="text-2xl md:text-3xl text-white opacity-80">
          17 y.o web-developer
        </h2>
      </div>
    </div>
  );
};

export default Main;