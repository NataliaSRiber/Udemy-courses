import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <h1>Conteudo...</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
