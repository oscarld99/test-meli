import React from 'react';
import styles from './App.module.scss';
import Router from 'routes';
import Header from 'components/Header';

function App() {
  return (
    <div className={styles.app__container}>
      <Header />
      <div className={styles.app__body}>
        <Router />
      </div>
    </div>
  );
}

export default App;
