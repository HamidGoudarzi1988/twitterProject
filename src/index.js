import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Theme from './components/theme';

render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
