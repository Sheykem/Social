import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let postsData = [
  { message: 'Hi, how are you?', countLike: 23 },
  { message: 'Yes i know React', countLike: 33 },
  { message: 'Redax wait me', countLike: 33 },
];

let dialogsData = [
  { id: 1, name: 'Alinka' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Stas' },
  { id: 4, name: 'Oleg' },
  { id: 5, name: 'Alinka' },
  { id: 6, name: 'Ura' },
];

let messagesData = [
  { id: 1, message: 'Hello men' },
  { id: 2, message: 'What are you doing?' },
  { id: 3, message: 'Who is your' },
];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
