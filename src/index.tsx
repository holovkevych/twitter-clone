import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  	<ThemeProvider theme={theme}>
      <Router>
    	  <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);