/*
  @todo: probably best to use current versions for the external modules that are core
  to the boilerplate code. This is not accurate of how it could be used in production.
 */
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