'use client';
import React from 'react';
import styles from './GradientText.module.css';

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
}

export default function GradientText({
  children,
  colors = ['#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  className = '',
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={styles['gradient-container']}>
      <span 
        className={`${styles['gradient-text']} ${className}`}
        style={gradientStyle}
      >
        {children}
      </span>
    </div>
  );
}