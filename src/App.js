import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Layout from './pages/Layout';
import History from './pages/History';
import ScrollToTop from './helpers/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="h-full bg-layout bg-repeat max-w-[1800px] mx-auto overflow-hidden">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
