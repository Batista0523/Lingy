import { useState } from 'react'
import LanguageSelection from './components/LanguageSelection'
import ProgressTracking from './components/ProgressTracking'
import QuizzesPage from './components/QuizzesPage'
import SpeakingPractice from './components/SpeakingPractice'
import VocabularyBuilder from './components/VocabularyBuilder'
import './App.css'
import { BrowserRouter as Router,Route } from 'react-router-dom'


function App() {
 

  return (
   <div>
    <Router>
      <Route path="/" element={<LanguageSelection/>}/>
      <Route path="./vocabulary" element={<VocabularyBuilder/>}/>
      <Route path='./quizzes' element={<QuizzesPage/>}/>
      <Route path='./speaking' element={<SpeakingPractice/>}/>
      <Route path='./progess' element={<ProgressTracking/>}/>
    </Router>
   </div>
  )

}

export default App
