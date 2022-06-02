import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PokeDex from './components/PokeDex';
import PokeDetails from './components/PokeDetails'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PokeDetails />
  </BrowserRouter>
);
