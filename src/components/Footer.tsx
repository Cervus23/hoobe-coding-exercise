import React from 'react';
import styles from '@/styles/Footer.module.scss';
import HoobeBtnIcon from '../../public/assets/HoobeBtnIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.createYourHoobeButton}>
        <HoobeBtnIcon />
        <span>create your hoo.be</span>
      </button>
      <a className={styles.internalLink}>
        <span className={styles.loginLink}>login</span>
      </a>
    </footer>
  );
}
