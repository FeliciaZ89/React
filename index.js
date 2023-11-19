import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home';
import Contacts from './views/Contacts'
import NotFound from './views/NotFound';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import { ArticleProvider } from './contexts/ArticleContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter >
   <ArticleProvider>
    <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/news' element={<News />} />
      <Route path='/newsdetails/:id' element={<NewsDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
);


