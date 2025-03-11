import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import HireMePage from './pages/HireMePage';
import MyJourneyPage from './pages/MyJourneyPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/hire-me" element={<HireMePage />} />
        <Route path="/my-journey" element={<MyJourneyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
