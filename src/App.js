import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <div className="allContent">
      <Header />
      <div className="app-wrapper">
        <Nav />
        <div className="app-wrapper-content">
          {/* <Profile /> */}
          <Dialogs />
        </div>
      </div>
    </div>
  );
};

export default App;
