import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LanguagePage from './pages/LanguagePage';
import AreaPage from './pages/AreaPage';

/**
 * Componente de nível superior definindo as rotas principais da aplicação.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* :language representa JS, TS, Python ou IA */}
        <Route path="/:language" element={<LanguagePage />} />
        {/* :area representa FRONT ou BACK */}
        <Route path="/:language/:area" element={<AreaPage />} />
      </Routes>
    </Router>
  );
}

export default App;