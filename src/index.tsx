import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import theme from "./styles/theme";
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
