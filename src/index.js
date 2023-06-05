import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import { theme } from 'theme/theme';

import './index.css';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/tweets">
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
