import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
// import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    beforeBreadcrumb(breadcrumb, hint) {
      return breadcrumb.category === 'ui.click' ? null : breadcrumb;
    },
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
