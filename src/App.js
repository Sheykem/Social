import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='allContent'>
      <Header />
      <div className="app-wrapper">
        <Nav />
        <Profile />
      </div>
    </div>
  );
};

export default App;
