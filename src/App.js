import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
