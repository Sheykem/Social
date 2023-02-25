import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import ComponentSettings from './components/ComponentSettings/ComponentSettings';

const App = (props) => {
  return (
    <div className="allContent">
      <Header />
      <div className="app-wrapper">
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<ComponentSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
