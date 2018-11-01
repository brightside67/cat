import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import * as serviceWorker from './serviceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
   @font-face {
    font-family: 'Exo2';
    src: url('./fonts/Exo2.0-Thin.otf');
    font-weight: normal;
    font-style: normal;
  }
  /* Apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', Arial, serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Exo2', Arial, serif;
  }
  b, strong {
    font-weight: bold;
  }
`;

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
