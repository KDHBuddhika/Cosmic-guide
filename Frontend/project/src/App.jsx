import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Zodiac from './pages/Zodiac';
import SignDetail from './pages/SignDetail';
import Horoscope from './pages/Horoscope';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white star-bg">
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/zodiac/:sign" element={<SignDetail />} />
          <Route path="/horoscope" element={<Horoscope />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App