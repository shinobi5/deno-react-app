import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import App from './containers/App/App.tsx';

window.addEventListener('DOMContentLoaded', () => {
  // @todo: still needs server side code to handle SSR
  // @ts-ignore
  ReactDOM.hydrate(
      // @todo: get rid of all of these ts-ignores currently in the code base...
    //@ts-ignore
    <App />,
    //@ts-ignore
    document.getElementById('root')
  );
});