import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicial from './pages/inicial/index.jsx';
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Inicial />
    </BrowserRouter>
  </React.StrictMode>,
)
