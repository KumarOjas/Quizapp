import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
        <div className="container">
            <h1 className="logo">Quiz App</h1>
            <ul className="flex-container">
                <li className="flex-item"><a href="https://quizard.app/start">Live quiz</a></li>
                <li className="flex-item"><a href="https://quizard.app/profile">Profile</a></li>
                
                <li className="flex-item"><a href="https://quizard.app/">Logout</a></li>

            </ul>
      </div>     
    </nav>
    <p>

Play Quiz
Welcome to Quiz app, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Engage in brain-teasing trivia that entertains and educates. Quizard - Where every question unlocks a world of possibilities!
</p>




   
    <a href="https://quizard.app/start" class="yellow-button">Click Me</a>
          
      </header>
    </div>
  );
}

export default App;
