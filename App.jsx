// Setting up the routing for the application by importing the Home component and other pages to route to

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Overview from './pages/Overview';
import Guide from './pages/Guide';
import ScrollToTop from './components/Scroll'; // the only component here

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </>
  );
}

export default App;