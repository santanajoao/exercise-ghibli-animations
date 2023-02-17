import React from 'react';
import loadingGif from '../assets/loading.gif';
import styles from '../styles/Loading.module.css';

export default function Loading() {
  return (
    <div className={ styles.loading }>
      <img
        src={ loadingGif }
        className={ styles.gif }
        alt="Carregando..."
      />
      <p className={ styles.text }>Carregando...</p>
    </div>
  );
}
