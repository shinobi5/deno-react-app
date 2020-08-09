import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import App from './containers/App/App.tsx';

window.addEventListener('DOMContentLoaded', () => {
  // @todo: get rid of these ts-ignores...
  // @ts-ignore
  ReactDOM.hydrate(
    //@ts-ignore
    <App />,
    //@ts-ignore
    document.getElementById('root')
  );
});