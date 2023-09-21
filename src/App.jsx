import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelection from './components/LanguageSelection';
import ProgressTracking from './components/ProgressTracking';
import QuizzesPage from './components/QuizzesPage';
import SpeakingPractice from './components/SpeakingPractice';
import VocabularyBuilder from './components/VocabularyBuilder';
import './App.css';

function App() {
  return (
    <div>
      <h1>Lingy</h1>
      <Router>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="vocabulary" element={<VocabularyBuilder />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="speaking" element={<SpeakingPractice />} />
          <Route path="progress" element={<ProgressTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
