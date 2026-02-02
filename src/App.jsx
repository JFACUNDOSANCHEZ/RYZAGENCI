import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import styles from './styles/GlobalStyles.module.css';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.noiseOverlay}></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
