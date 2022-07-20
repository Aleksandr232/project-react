import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <>
      <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorites' elemen={<Favorites/>}/>
        </Routes>
    </>
  );
}

export default App;
