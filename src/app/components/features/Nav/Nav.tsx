'use client';
import React from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoLink}>asynchrome</Link>
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;